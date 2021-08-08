<h1 align="center">
  <img src="https://github.com/claudio-familia/WalletPlanifier-mobile/blob/master/wallet-planning.png" width="100%"/><br/>
</h1>
<h2>Aplicación movil ionic</h2>
<p>
Las arquitecturas en el framework basados en angular como ionic están definidas y 
trabajan en conjunto como un ecosistema de desarrollo.
</p>
<p>
 Esta arquitectura se divide en:
</p>
<ul>
<li><b>Módulos:</b> Un módulo o NgModule declara un contexto de compilación para un 
conjunto de componentes. Un NgModule puede asociar sus componentes con 
código relacionado, como servicios, para formar unidades funcionales.
</li>
<li><b>Componentes:</b> Cada aplicación de Angular tiene al menos un componente. Al 
igual que el root module, existe el root component que conecta una jerarquía de 
componentes con el DOM. Cada componente define una clase que contiene 
data y lógica, y está vinculada a nuestro template HTML.</li>
<li><b>Servicios:</b> Son todos los datos o lógica que no está asociada directamente a 
una vista y que quieres utilizar en diferentes partes de tu aplicación y entre 
diferentes componentes.
</li>
<li><b>Inyector de dependencias:</b> Dependency injection o Inyección de Dependencias 
te permite manejar las clases de tus componentes de forma ligera y eficiente. No 
obtienen datos del servidor, validan los user input o logs directamente en la 
consola; delegan la obtención de datos a los servicios.</li>
</ul>

<h2> Configurando ambientes de desarrollo</h2>
  
### Run for Web

1. Go to project folder */src/* using the console or terminal
2. Run command **```npm install```**
3. Run command **```npm install -g @ionic/cli```**
4. Run command **```ionic serve```**

### Develop for Android

1. Install Android Studio
2. Install Java SE Development Kit 8 if you are using Windows or install Java SE Development Kit 15 if you are using macOS
3. Configure: 

#### &emsp;&emsp; Windows

&emsp;&emsp;&emsp; 3.1 Open any folder on your computer <br/>
&emsp;&emsp;&emsp; 3.2 In the navigation pane right-click This PC and select Properties <br/>
&emsp;&emsp;&emsp; 3.3 Click Advanced system settings <br/>
&emsp;&emsp;&emsp; 3.4 Click Environment variables <br/>
&emsp;&emsp;&emsp; 3.5 Click in the New button <br/>
&emsp;&emsp;&emsp; 3.6 In variable name put *ANDROID_SDK_ROOT* <br/>
&emsp;&emsp;&emsp; 3.7 In variable value put *C:\Users\your-user\AppData\Local\Android\Sdk* or the location of the Android SDK <br>
&emsp;&emsp;&emsp; 3.8 Click Ok <br/>

#### &emsp;&emsp; macOS or Linux

&emsp;&emsp;&emsp; In *```~/.zshenv```*, *```~/.bashrc```*, *```~/.bash_profile```*, or similar shell startup scripts add the following: <br/>

&emsp;&emsp;&emsp; **```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
&emsp;&emsp;&emsp; **```export JAVA_HOME=$(/usr/libexec/java_home)```**

4. Go to project folder using the console or terminal
5. If the folder */android* does not exists run command **```ionic capacitor add android```**
6. Run command **```ionic capacitor run android```**

### Develop for IOS

1. Install Xcode
2. Go to project folder using the console or terminal
3. If the folder */ios* does not exists run command **```ionic capacitor add ios```**
4. Go to folder */ios/App* and run command **```pod install```**
5. Run command **```ionic capacitor copy ios```**
6. Run command **```ionic capacitor run ios```**

