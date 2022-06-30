export default class PsConfig {

    static versionNo : String = '1.1';

    ///
    /// API Key to connection with Main Backend
    /// This key must equal with key from backend
    ///
    static apiKey: String = "swaggycars";

    ///
    /// Live Mode
    /// ------------
    /// If you want to upload to server, please enable below and comment Development below
    ///
    static fixedDomain: String = "http://carsayara.com/secureaccess/"; 
    static domain: String = "http://localhost:3000"; 

    ///
    /// Development Mode
    /// -----------------
    /// Before upload to server, please comment this 2 lines.
    ///
    // static fixedDomain: String = "https://www.products.panacea-soft.co/flutter-admotors";    
    // static domain: String = "http://localhost:3000";

    ///
    /// Firebase Config
    ///
    static firebaseConfig = {
        apiKey: "000000000000000000000000000000000000000",
        authDomain: "flutter-buy-and-sell.firebaseapp.com",
        databaseURL: "https://flutter-buy-and-sell.firebaseio.com",
        projectId: "flutter-buy-and-sell",
        storageBucket: "flutter-buy-and-sell.appspot.com",
        messagingSenderId: "000000000000",
        appId: "1:000000000000:web:0000000000000000000000",
        measurementId: "G-0000000000"            
    };
    
    // static firebaseConfig = {
    //     apiKey: "AIzaSyCCbP35UgAsfdnJaQM4TxWDLICYR4gDi28",
    //     authDomain: "flutter-admotors.firebaseapp.com",
    //     databaseURL: "https://flutter-admotors.firebaseio.com",
    //     projectId: "flutter-admotors",
    //     storageBucket: "flutter-admotors.appspot.com",
    //     messagingSenderId: "959099436187",
    //     appId: "1:959099436187:web:915d817bd3b509b1b81a3e"
    // };
    
    ///
    /// Base URL * Don't update it *
    ///
    static base: String = PsConfig.domain; 
    static baseUrl: String = PsConfig.domain + '/index.php';
    static fixedPath : String = PsConfig.fixedDomain;
    
    /// 
    /// Debug Mode
    ///
    static isDebugMode : Boolean = true;

    /// Is Demo
    ///
    static is_demo : Boolean = true;

}
