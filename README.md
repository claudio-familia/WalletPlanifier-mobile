<h1 align="center">
  <img src="https://github.com/claudio-familia/WalletPlanifier-mobile/blob/master/wallet-planning.png" width="100%"/><br/>
</h1>

### How to run

1. Go to folder */src/* using the console or terminal
2. Run command **```npm install```**
3. Run command **```npm install -g @ionic/cli```**
4. Run command **```ionic serve```**

### Compile for Android

1. Install Android Studio
2. Install Java Runtime Environment 8 
3. Configure for Mac <br/>
  2.1 In *```~/.zshenv```*, *```~/.bashrc```*, *```~/.bash_profile```*, or similar shell startup scripts add the following: <br/>
  
     &nbsp; &nbsp; &nbsp; &nbsp;**```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
     &nbsp; &nbsp; &nbsp; &nbsp;**```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
     &nbsp; &nbsp; &nbsp; &nbsp;**```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
     &nbsp; &nbsp; &nbsp; &nbsp;**```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
     
     &nbsp; &nbsp; &nbsp; &nbsp;**```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**
4. Run command **```ionic capacitor add android```** if the folder *android* does not exists.
5. Run command **```ionic capacitor run android```**
