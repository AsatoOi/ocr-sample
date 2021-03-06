const vision = require("@google-cloud/vision");

const CREDENTIALS = JSON.parse(
  JSON.stringify({
    type: "service_account",
    project_id: "camera-test-354009",
    private_key_id: "d57d3d911377a2c05146a2deff1a71a86b586b05",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8EuTJKZ/x389h\nAEPak0wtyeDtFsiwfDovBa5NHHjnpsg7Xjoq1gvPAjmA7yLT1psZJ+FuNRYpDJkj\n7ygkCF4pVqGdhJ+nhxbOg5So9dvJXw1OODTJ3LJVB4WtxiNsX+o21VHAKNpJsG08\nUfGAg3NO4Xfb4IAZtOoPKfr0wBt47tzy+DpgGLVrIeVbhajQgz1UOBfJOopdNWFM\nGtQ0e0dAcizf357XeGg2A7nQxFQEx25HYXjogZnUYFjXbRYT5pWJo6MCZcmG+bmz\nlapyU2QBOiFyQVQE81KhBPGOXptc8Rq8jNrAZQnvGmiJLQupC9EXPDti0we61aym\nIHkDHTgZAgMBAAECggEACb4NT63aMRZ7yL2xpiGN90u/POzal8jRn0SzMR+l1DMn\nqWqhxv0IRtCJz8fjdReHeIPAOdwiYh061BmUCdzMmuXX0J/xgMU+zVMT2PZGbL2h\no/EFrATEkKLHfhdW16r2yCEf/10mZJ2Q5QhmIxb8GsSTd8Z/AEXmv4MYUsQeUDLx\npkOrzhN20XHWZq9+xLcFOCdYr6xDDur6rV2RHOhJ+bZ51W6/znmzTBZxZo3y3xfx\nvyZZvIpZrZE+nasZfEBbInlxD0+YSwfl8cC0KgKoMru1bjFTIv8yw0AaMIbXaFL0\npcANetDalNYMHa+x7ugoftVS2htaRXchscSWQHuTsQKBgQDoR1n7XMNAhOvEZ15Q\nWKldm4aZ4g38STTFV36yXcl1jpoyXix+8fXdjwnQrqZ4NnTgSaOsEFvumIBfCRLb\nFkfqJhSeQ0P9v8wNwhB7Ki66+mfx3aV81ZzGW9ehv47L7p80mFcBylc4xOWTUWoE\nKQ8HnDLn4c+QiigGV6yirqH1UQKBgQDPR9uVzFTyOXWWKflxzuWiD/3h7hPoUXnK\nsReTi82gCd34Ts/iUYzGyX6vkazKTHmInuY8m1ynKJ0ypE5JGmsvGfR1UiC5GIAt\n1z+SGz3vNhcC6xKjuR7byqZHoDUY6atJosulhiu5Vy1rErtlCR55MNlL2vWoAvXS\nWig9S0kESQKBgDVfZ9K1XvwtTsuDgQ1vQgOLYCNt6Q7Gd4S89RThLhCAIvhd4VWO\nHZO6cWPtLb1Drhl3ck9wNt+dVSoBOL704LNx6pzvEel1r9qddBIJAFHghg/ygTst\nDmgZ5HN7Q8GiZBy+wIddyir2O1Zdh8HK+XQjNSNJJNuuk0HZ1YZQIFDxAoGBAJA8\njIx8l0/GtBA+PRn4wso3Ho+sv6WVrI5jFOjTC88ljpRPI1F1NeTOKZ26XOaYuKld\nCRF7esnG9TxcIS21eIhaI0XQVHz4k5lSgyYEVuCyXujk8x+CnfqL1ZFZ5hjj4RFo\nexU/fAWIqE4txsDTy6TBXTPvtamoBa7OldmxHaohAoGAcmp+mOmgTiBISV3fYA4D\nUMUAvCE/inucoSBOBta0j+1qnDCfDIfN+6WqRHsMshjBBt9n5rm1Cd+O4jiWogXb\nDWSfEXu19UzREitqCV1OzQBDRXsGWZkFV4q/zKvgH7GhrI98dqx2F60awy0z/BZr\nj021aAMCTOVVmxFQ4vCJIyY=\n-----END PRIVATE KEY-----\n",
    client_email: "camera-test@camera-test-354009.iam.gserviceaccount.com",
    client_id: "110786584507717649673",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/camera-test%40camera-test-354009.iam.gserviceaccount.com",
  })
);

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectText = async (file_path) => {
  const [result] = await client.textDetection(file_path);
  const detections = result.textAnnotations;
  const descriptions = detections.map((text) => text);
  console.log(descriptions[0]);
};
detectText("book02.jpeg");
