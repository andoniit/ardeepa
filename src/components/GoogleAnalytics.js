import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GoogleAnalytics = ({ measurementId }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", measurementId);
  }, [measurementId]);

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
    </Helmet>
  );
};

export default GoogleAnalytics;