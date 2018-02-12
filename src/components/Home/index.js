import React from 'react';
import Accordion from './Accordion.js';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {isOpen: false};
  }
  render() {
    return (
      <div className="home">
        <div className="home--h1">
          Ameen Merchant App
        </div>
        <Accordion>
          <div className="accor">
            
            <div className="accor--head">
            
            <div className="accor--head__name">

              <div className="accor--head__name__ico">
                <svg width="36" height="36" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <g id="Canvas">
                    <g id="Image">
                      <use href="#path0_fill" fill="url(#pattern0)"/>
                    </g>
                  </g>            
                  <defs>
                    <pattern id="pattern0" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0" transform="matrix(0.0277778 0 0 0.0277778 0 0)"/>
                    </pattern>
                    <path id="path0_fill" d="M 0 0L 36 0L 36 36L 0 36L 0 0Z"/>
                    <image id="image0" width="36" height="36" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANuSURBVHgBzZhLTBNBGMf/u90itFTSllYKaIghBuTowRiRiPiIDxKBAyGa4EENBz2IUcJFiiFK4gNfBxJN5KCRxIh6UNHEABqDnrxowMQEhLSgFGgpfUChdaaVYu1rh7Kxv2Sz2+7O7H9nvm++7xvORwAD5mkv7vVa0TPgwOTMIuwuD1weL2gnCjkPVaoMmnQBpYUKHN+lRo5GxtI9OLGC2rpt6OibhtnqhthP4MhhUMlxrESN+nKNuDbxBD3+5ICx6xd+2uaQCDqFAGOlHtXFa7EiQQteoOrWGD4M2rCabMtT4On5DRB4iBc0ZvPiwJURjFrckIIclYDuxjwYNALiCqJitjcPYcbpgZSkEwfob94YJipk4Og00ZGRWgxllnjmvktD/ndGFURtRqppioR5dhGHLw8joiDqTawGLCOtmyp1+HY133/QaxnP1AU+jrrR2WcN/g7aUFHDELNrUwGn92pD/rv9ZhLNXRNgIXMNj8Gbm5YF3SCLXsuzsagNyoqUaDuahWy1POL9mjuj/vOjU+sj3jdNeVD/cBxvvzoQjcY9Wpyt0gWm7D5ZgWMRS4wYcjRyXD+SFfOZjvcBDQKNTTQcxCKemGgj86+oWIy7vTBNeMDf7bGCLbxKA5XQ/soCoXfAwdw4s25Q1HOW9gKw0Ee08JNkLUgWJp2LEOyuBbDC+uVimZ33gnfNJ88IuYkhCYE0is2qpbIh+DjwaXIOyUIq54OgShVgn2ObNqlsKD2FB69JZ0vCpUSTxkHYWaDAF5OTqWEsG0pk9Eo3K8GfKFODSxIzOrlfD4HWTQZVCswz86IbSmFDWcTfc/XyQLSnddP/pnZHhv/sF1R/SA2dMno0Nk8nnmPTnCgaWpkP56oNy4IoRpL9RePMg/GERC0laNEwVuiD1yFlUHnrKPqH2aN/ImzVC3hxMR8RBdGSZEvDd5js7AF3JRhSfPjcVgjhr6UwpEag5S2tKGkRJzVKEj9fX8gPERMmiEIrSVpR5qikW8HpyPS35CM7M9yRYm42VLT+QP+IC6sJtZnnTeEjE1fQEp3vrDA+mYBlLrG8SSuj3qRDzW5tzOdEb1hdI6JoqUKrA7HZE41I68is1BZnBNeZuG1Yt/RMFg/aX1r8CfmU0ws7yTjdf3pI5QK7GloStUsKlag7qEeujq2e+w0oTmLk8EJV6AAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
              </div>  
  
              <div className="accor--head__name__text">How to Setup</div>
            </div>

              <div className="accor--head__arrow">
                <svg width="15" height="9" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <g id="Canvasarrow">
                    <g id="Imagearrow">
                      <use href="#path1_fill" fill="url(#patternarrow)"/>
                    </g>
                  </g>
                  <defs>
                    <pattern id="patternarrow" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#imagearrow" transform="matrix(0.0666667 0 0 0.111111 0 0)"/>
                    </pattern>
                    <path id="path1_fill" d="M 0 0L 15 0L 15 9L 0 9L 0 0Z"/>
                    <image id="imagearrow" width="15" height="9" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgBhZFNDoQgDIUfbMDVxIM4GZ37H0EmowdBV9QVIvEvptW3eSnwvdAWUVAIFFvXZZekwYhoQgLh/ZB9qTlpCSSitSYxQEugMQb1p8ouBajl71fQWoumrlAUFqlnuF+/n3+bd3JzwFfw/IAL3u7VOlURvAtQrftH78dbkAsoyxdST+Fxn/z+Q5wBSv7yyZhhMoUAAAAASUVORK5CYII="/>
                  </defs>
                </svg>
              </div>
  
            </div>
            
            <div className="accor--body">
              <ul>
                <li>Step 1: git clone this repo </li>
                <li>Step 2: cd to the cloned repo</li>
                <li>Step 3: install the Application with yarn or npm i </li>
              </ul>

            </div>

          </div>

          <div className="accor">

            <div className="accor--head">

            <div className="accor--head__name">

              <div className="accor--head__name__ico">
                <svg width="36" height="36" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <g id="Canvas1">
                    <g id="Image1">
                      <use href="#path0_fill" fill="url(#pattern1)"/>
                    </g>
                  </g>
                  <defs>
                    <pattern id="pattern1" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image1" transform="matrix(0.0277778 0 0 0.0277778 0 0)"/>
                    </pattern>
                    <path id="path0_fill" d="M 0 0L 36 0L 36 36L 0 36L 0 0Z"/>
                    <image id="image1" width="36" height="36" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgB1ZhLSFRRHMa/uV4dX+OzMR9EIAYWQVFCkRMRWIuIVmG7KKJNi8hahLQLJCJICFoUBGGbilYt2pS10MiFiVD0ZkwKNTXNmeu8nEfnu+I09zo69zEj9oOZM3dm7vl/55x7/o/jSAhgAt9CAq9+hfF6KoyxYByToZh4xdXfagol8cpDfZGEVrcTBzc6UZbvMNM9HEYFPZ8Io8cbwOBMBNG4sTHIkgMtVQU42ViMQ7VOQ/dkFDQ0s4DrH/yijcAOu4Swy9tcos2HJUFchGvv/bjvnUc2OdVYgs7tLkgwIcgfTeD84B/0T4aRCzw1TtxqqYBLdmQWRDHtfb/xzR9FLmlyyXi8v3qZKM3McZk4M7kWQ2iDtuK67zWC+MzkapnSQVu0mVYQd1O2H2Aj0CZtL5F8hk70z2Tc2qeFP7nQXIpiWYJRAtE4uj8pwnBgxf/QJTzyVKmf1Z7p9Iz4mY5mV1oxo0oUvRMhtdXD/3eIQawGbVMDkfnWs4r6VIp0OyIuJvfKsA9PfgST3x3fVISunWWQHA6NqExQA725xNg0aNEL94wEVDFtoqPu3eVqy+sHI8YGmAo1UIvEQGk0Nul5MxVBnQikdHJHG4rUtkIE0xcT5ncqNVCL3D9lfZvf2VOpuV4QnQq/CtlcgE9CLdJ4MI5sQDEdb+cwLxSdbSqBFahFZj6TDa6+8+GlmPKuHWXY5zaWauihFmkpubLDz0AUD0eDONZQiPbNxbAKtUgWl1vDdyWGWpEtttUVwg7UIrtFR4pib5aYTvQdroFdqEViDmwXr/DQd78qamsHapGYkNvlsy+KGx8VtbUDtUitJnbEbCT90nrcBXh6oFptzdynh1pkliqsDox4687hOZzbUqqJaY2leXDlS9havjjTMRHfvMo/VxIUfun2FyVj39SgamHdxFJlYDqzx+4VIaFXFxaO1BfipohjeY7FQV0amsOzsRDMQg3Uog6LdZNVaJweOhRL4KJFMakaTCVoq7HBKWE6bM19LEvQCIs4O1gVo7edFMSKkkXcWkObqdWspi7jGM8MzK5Z5UEPf29vpab00XhFXjDJYhGXa2iDtvRueZmbZiXJipLqcwX7Tle1kv/jsCGVdXMco2fdHFjpWTrSY0I+vsKRHisRj8Ujvb+kMLve6j81sgAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
              </div>  

              <div className="accor--head__name__text">How to Run App</div>
            </div>
            
            <div className="accor--head__arrow">
              <svg width="15" height="9" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g id="Canvasarrow">
                  <g id="Imagearrow">
                    <use href="#path1_fill" fill="url(#patternarrow)"/>
                  </g>
                </g>
                <defs>
                  <pattern id="patternarrow" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#imagearrow" transform="matrix(0.0666667 0 0 0.111111 0 0)"/>
                  </pattern>
                  <path id="path1_fill" d="M 0 0L 15 0L 15 9L 0 9L 0 0Z"/>
                  <image id="imagearrow" width="15" height="9" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgBhZFNDoQgDIUfbMDVxIM4GZ37H0EmowdBV9QVIvEvptW3eSnwvdAWUVAIFFvXZZekwYhoQgLh/ZB9qTlpCSSitSYxQEugMQb1p8ouBajl71fQWoumrlAUFqlnuF+/n3+bd3JzwFfw/IAL3u7VOlURvAtQrftH78dbkAsoyxdST+Fxn/z+Q5wBSv7yyZhhMoUAAAAASUVORK5CYII="/>
                </defs>
              </svg>
          </div>


        </div>

            <div className="accor--body">
            <ul>
                <li>Step 1: git clone this repo </li>
                <li>Step 2: cd to the cloned repo</li>
                <li>Step 3: install the Application with yarn or npm i </li>
              </ul>
              
            </div>

          </div>

          <div className="accor">
           
            <div className="accor--head">
              
              <div className="accor--head__name">
              
                <div className="accor--head__name__ico">
                  <svg width="36" height="36" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Canvas2">
                      <g id="Image2">
                        <use href="#path0_fill" fill="url(#pattern2)"/>
                      </g>
                    </g>
                    <defs>
                      <pattern id="pattern2" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image2" transform="matrix(0.0277778 0 0 0.0277778 0 0)"/>
                      </pattern>
                      <path id="path0_fill" d="M 0 0L 36 0L 36 36L 0 36L 0 0Z"/>
                      <image id="image2" width="36" height="36" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgB1ZhJSxthHMafeZ0a1KKmraVJF2h7aIWC5lasQg9VkHppDz301C9Qeij0Wuix0EPpN+ihhx5aEEUwF8EFD4JRBJdDxC3uJgZNiNs4z0BCNp03y2TGHySQmcz8f7wz7/K8iqaDAgifHKF/LwR/ZAPLiUOEjuIIJeLGOa+rBt7qGjxw1aGz8Q5e3/DCrVYXcnsoskL/d1fxKzSP4f1tnGhnMpdAVQQ6Gprw0fsEb27ek7rGVGg0uoMvi5MYi26jFNrqm/D9oQ8v6m+hKKFTaPgcnMTPtTmUk093n+LHIx+qoEBaKHJ6jHezI/CH12EFnW4P/ja3o7HqGkyFKNMWGMRsbB9W0lzbgLHWrhwpkf6Dj4ktY7UMYQ3WYs0LhfjOWPWY8sFarJlXiL2p3C+wDKzJ2jlC7Np2kV5b5RcHPZlxRut4f+n5r0vT+LY8g0JhbTpw8DRaiCNwOWitc6NYkg7K3nFCuz3+T2o6MGuhi1CG/5j+h9PM1vO3EH36RCk7N1kJHegi/JHKdXMz6CJWEjE4BboIrmecAl1EcnHlBOgiFAWOgS7Coy85nQJdVK6BF2JR6YuC8QM8nujNOR7wdaPlevEDI6GL4IK8HAQOwygVuqiv9HTwezOIUvmwMG58SoFJRfToUYXDtt3QgbFJMDcxqtgNHehiNA1zk90kHQwhrkOYm+yCtZNBMpU6uIxsnxqEHYy0dKUCZOpt5gGGuErDmulpNiOXMZJ0zwxVLHkwMA48e5mRYjP6O08wUTLEWQ1rsFZ2pM4ZgJgkmShpbxW8d77USq7GZkM6jtmOycYxG1bZcEuvz9jSWzfWwPm29O67avWJ0oOeIrb0zgFvuzfZGi07fAAAAABJRU5ErkJggg=="/>
                    </defs>
                  </svg>
                </div>  

                <div className="accor--head__name__text">Standard Compliant</div>
            </div>
              
            <div className="accor--head__arrow">
              <svg width="15" height="9" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g id="Canvasarrow">
                  <g id="Imagearrow">
                    <use href="#path1_fill" fill="url(#patternarrow)"/>
                  </g>
                </g>
                <defs>
                  <pattern id="patternarrow" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#imagearrow" transform="matrix(0.0666667 0 0 0.111111 0 0)"/>
                  </pattern>
                  <path id="path1_fill" d="M 0 0L 15 0L 15 9L 0 9L 0 0Z"/>
                  <image id="imagearrow" width="15" height="9" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgBhZFNDoQgDIUfbMDVxIM4GZ37H0EmowdBV9QVIvEvptW3eSnwvdAWUVAIFFvXZZekwYhoQgLh/ZB9qTlpCSSitSYxQEugMQb1p8ouBajl71fQWoumrlAUFqlnuF+/n3+bd3JzwFfw/IAL3u7VOlURvAtQrftH78dbkAsoyxdST+Fxn/z+Q5wBSv7yyZhhMoUAAAAASUVORK5CYII="/>
                </defs>
              </svg>
            </div>

          </div>
            
            <div className="accor--body">
            <ul>
                <li>React-Router v4 </li>
                <li>React-Avatar</li>
                <li>ES6, SASS, Flexbox</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>

          <div className="accor">
            
            <div className="accor--head">
            
              <div className="accor--head__name">
            
              <div className="accor--head__name__ico">
                <svg width="36" height="36" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <g id="Canvas4">
                    <g id="Image4">
                      <use href="#path0_fill" fill="url(#pattern4)"/>
                    </g>
                  </g>
                  <defs>
                    <pattern id="pattern4" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image4" transform="matrix(0.0277778 0 0 0.0277778 0 0)"/>
                    </pattern>
                    <path id="path0_fill" d="M 0 0L 36 0L 36 36L 0 36L 0 0Z"/>
                    <image id="image4" width="36" height="36" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOFSURBVHgB1VhLTxNRFP5mOm2hPIuPBEQXihJM1AhsRFxogo9oNG5w51YXGjUmRv0Bmpj4ii5c40o2RqPBSKILsW4AI0YJipgoEqNIaQuFPsf73aZjW4szFUvxS24yc+6953wz9557zrmKLoAcoEe9iPx4iIi3G7HQJ8RDY4iHx2Sf6qiB6qyBzbkKdncb7Ev2QtHcuaiHYpVQePwuZr/cQNT3DHo8amUKFFWDVrENRSuOw7H0oLU5ZoSi/ucIfjiDiM+D+cBe0QLXmkvQyrfiLwnFEBw+jZnR6/iXKK49AVfdZfFkg2VCenQSU2/bEZ7oRj7gqGpD6fpOsb8qYUqIZPwvWxCdHkQ+oZU0oHyz5zdSavqwmPwz+SZD0AZt0eachLhn8rVM2UBbtJkKY8noTb7+VhQCFY09hvcZf4iuXSik2paEeOjN95yZD2ibHAxCPIELjSQHjbGJ4SBX2Kt2w7HsEGyudaLVS1ksOCRb+HsnIhOPclGXCEmCixL62qEHBg9bnmh374Rr9QVoZU1/NhDoQ3DkvAjCj2EVZQ0dUMNe627urD6Cso1dBpnYzEcE3rRjwlMjG58pIziGYznHKshFi4c+WxpcVHsKJXVXjHcuzWRfM0TuIZZvV0Lh+D1xtnShsqlXLqOiqCitvwXF5sLs6FVTG+SiMp8xg1pcJ5bpYpps+v0xxhlxhrxA+Yb7slU0eqRM9qWAc6nDnNCYIBQ2J1RSd03kNk7jXY9HhKv2yBxHK2s05FwmytjHMUlwLnWYEhJchNsrWDxQoKqOatNh08MnxReHfk1T7SLhapWHWTTQb8jpWZSxj2OS4FzqMAO5qMyBzRCfGRYufC5NVrL2pmCmifi3Bf7X+2Xz9bdImexLQXDkrNRhSkhwUZmQWwG9ZGroKHQ9Lt/pRZXNA2LPHBB/plc2PlOWPCg5lnNmR833j9QpuCyyg/E2lHhkQvd6lluuJAxic4aOdyJ03Mk5dLBCcbd8S+RD/lc7xJc8RSFhd29H+aYniWjPuqnQSHKQhHiYsW4qFGg7WUgaGSOLuEIh1bZBiDkti7iFBm2mVrMZdVkMgYE9C1Z5sGBkipJaxWbUZTZZUbKIyzdog7YyS2o1cyArSVaUZJ8vUHe2qjUroSQp/sp87CnqpO5sZKTt/+g6Jh2L5sIqE4krvQcyIWcOnO1KT3WuhENe6e3L+UrvJ01QxnBmAwdiAAAAAElFTkSuQmCC"/>
                  </defs>
                </svg>
              </div>  

              <div className="accor--head__name__text">Secrets</div>
            </div>

              <div className="accor--head__arrow">
                <svg width="15" height="9" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <g id="Canvasarrow">
                    <g id="Imagearrow">
                      <use href="#path1_fill" fill="url(#patternarrow)"/>
                    </g>
                  </g>
                  <defs>
                    <pattern id="patternarrow" patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#imagearrow" transform="matrix(0.0666667 0 0 0.111111 0 0)"/>
                    </pattern>
                    <path id="path1_fill" d="M 0 0L 15 0L 15 9L 0 9L 0 0Z"/>
                    <image id="imagearrow" width="15" height="9" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgBhZFNDoQgDIUfbMDVxIM4GZ37H0EmowdBV9QVIvEvptW3eSnwvdAWUVAIFFvXZZekwYhoQgLh/ZB9qTlpCSSitSYxQEugMQb1p8ouBajl71fQWoumrlAUFqlnuF+/n3+bd3JzwFfw/IAL3u7VOlURvAtQrftH78dbkAsoyxdST+Fxn/z+Q5wBSv7yyZhhMoUAAAAASUVORK5CYII="/>
                  </defs>
                </svg>
              </div>

            </div>

            <div className="accor--body">
            <ul>
                <li>React-Router v4 </li>
                <li>React-Avatar</li>
                <li>ES6, SASS, Flexbox</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>

        </Accordion>
      </div>
    );
  }
}


export default Home;