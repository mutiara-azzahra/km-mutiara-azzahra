package com.carrental;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle saveInstanceState){
    SplashScreen.show(this, true);
    super.onCreate(saveInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "carrental";
  }
}
