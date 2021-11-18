import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dB from "../../firebase";
import "./Plans.css";
import { selectUser } from "../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    dB.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    dB.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(products);
  console.log(subscription);

  const loadCheckout = async (priceId) => {
    const docRef = await dB
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        //Show error to your customer
        //Inspect your cloud function log n the firebase console
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        //we have a session,lets redirect to checkout
        //init stripe
        const stripe = await loadStripe(
          "pk_test_51JfNxEHb2kwk0Q3wto7IupyJEAWy7QqrmQz8APXwLibz7tps2HgKTMsXbICum6jIluwTLJI2zNIe6Zk39ihLrkYU00xJKV7AgF"
        );
        // stripe.redirectToCheckout({ sessionId });
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="plans">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        //add some logic to check if the user's subscription is active
        const isCurrentPackage = productData.name?.includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "plans__plan--disabled"
            } plans__plan`}
          >
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              <h2>{isCurrentPackage ? "Current Package" : "Subscribe"}</h2>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
