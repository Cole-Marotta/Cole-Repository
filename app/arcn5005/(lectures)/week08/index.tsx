import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import Gltf from "./Gltf";
import { title } from "process";

export const content: Toc = [
  // JAVASCRIPT CONTENT
  {
    element: (
      <>
        <Image
          src="/images/javascript/js.gif"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={"JavaScript is the programming language of the Web"}
        />
      </>
    ),
    notes:
      "Do not confuse with Java, Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world \n\
      JavaScript and Java are completely different languages, both in concept and design. \n\
JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997. \n\
ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.",
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/compiled-vs-interpreted-languages.png"
          alt="Compiled vs Interpreted"
          href="https://www.linkedin.com/pulse/what-difference-between-compiled-interpreted-programming-language/"
          caption={"Compiled vs Interpreted"}
        />
      </>
    ),
    notes:
      "Programming languages can be broadly categorized into two types based on how they are processed: compiled and interpreted. \n\
      In Compiled langugages, the source code is passed through a program called a compiler, which translates it into machine (low-level language) code that the machine understands and can execute (.exe or .dll files) \n\
      In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.",
  },

  {
    element: <EmojiTitle emoji={"👋🌎"} title="printing: 'Hello world!'" />,
  },

  {
    element: (
      <>
        <h3>{"<script> console.log(`Hello world!`) </script>"}</h3>
        <br />
        <Image
          src="/images/javascript/html-hello-world.png"
          alt="Script Hello world"
          caption={
            "Using JavaScript into HTML. Hello world within a script HTML element → the output will be rendered in the web browser Console (F12)"
          }
        />
      </>
    ),
  },

  {
    element: (
      <>
        <h3>{'<script src="./main.js" ></script>'}</h3>
        <br />
        <Image
          src="/images/javascript/hello-world.png"
          alt="Hello world"
          caption={
            "Adding a JavaScript external file to our HTML file. By convention we will call it main.js, app.js, or index.js → the output will be rendered in the web browser Console (F12)"
          }
        />
      </>
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"JavaScript Variables 🗃️"}
        title="Variables or constants are containers that will eventually be declared with values"
      />
    ),
    notes:
      "Variables or constants are containers that will eventually be declared with values \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.",
  },

  {
    element: (
      <>
        <h1>Var, let or const 🗃️❔</h1>
        <br />
        <h3>
          ℹ️The <b>var</b> keyword was used in all JS code from 1995 to 2015
        </h3>
        <h3>
          ℹ️The <a href="https://www.w3schools.com/JS/let.asp">let</a> and
          <a href="https://www.w3schools.com/JS/js_const.asp"> const </a>
          keywords were added to JS in 2015
        </h3>
        <h3>
          ⚠️The <b>var</b> keyword should only be used in code written for older
          browsers
        </h3>
      </>
    ),
    notes:
      " \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.",
  },
  {
    element: (
      <div>
        <h2>When to Use var, let, or const?</h2>
        <ol>
          <li>Always declare variables</li>
          <li>
            Always use <strong>const</strong> if the value should not be changed
          </li>
          <li>
            Always use <strong>const</strong> if the type should not be changed
            (Arrays and Objects)
          </li>
          <li>
            Only use <strong>let</strong> if you can`t use
            <strong> const</strong>
          </li>
          <li>
            Only use <strong>var</strong> if you MUST support old browsers.
          </li>
        </ol>
      </div>
    ),
    notes:
      " \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.",
  },

  {
    element: (
      <>
        <h2>JavaScript Arithmetic Operators</h2>
        <h5>Arithmetic Operators are used to perform arithmetic on numbers:</h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>+</td>
              <td>Addition</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Subtraction</td>
            </tr>
            <tr>
              <td>*</td>
              <td>Multiplication</td>
            </tr>
            <tr>
              <td>**</td>
              <td>Exponentiation</td>
            </tr>
            <tr>
              <td>/</td>
              <td>Division</td>
            </tr>
            <tr>
              <td>%</td>
              <td>Modulus (Division Remainder)</td>
            </tr>
            <tr>
              <td>++</td>
              <td>Increment</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Decrement</td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="https://www.w3schools.com/js/js_arithmetic.asp">
          source: https://www.w3schools.com/js/js_arithmetic.asp
        </a>
      </>
    ),
  },

  {
    element: (
      <>
        <h2>JavaScript Assignment Operators</h2>
        <h5>Assignment operators assign values to JavaScript variables.</h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Example</th>
              <th>Same As</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>=</td>
              <td>x = y</td>
              <td>x = y</td>
              <td>
                The Simple Assignment Operator assigns a value to a variable.
              </td>
            </tr>
            <tr>
              <td>+=</td>
              <td>x += y</td>
              <td>x = x + y</td>
              <td>
                The Addition Assignment Operator adds a value to a variable.
              </td>
            </tr>
            <tr>
              <td>-=</td>
              <td>x -= y</td>
              <td>x = x - y</td>
              <td>
                The Subtraction Assignment Operator subtracts a value from a
                variable.
              </td>
            </tr>
            <tr>
              <td>*=</td>
              <td>x *= y</td>
              <td>x = x * y</td>
              <td>
                The Multiplication Assignment Operator multiplies a variable.
              </td>
            </tr>
            <tr>
              <td>/=</td>
              <td>x /= y</td>
              <td>x = x / y</td>
              <td>The Division Assignment Operator divides a variable.</td>
            </tr>
            <tr>
              <td>%=</td>
              <td>x %= y</td>
              <td>x = x % y</td>
              <td>
                The Remainder Assignment Operator assigns a remainder to a
                variable.
              </td>
            </tr>
            <tr>
              <td>**=</td>
              <td>x **= y</td>
              <td>x = x ** y</td>
              <td>
                The Exponentiation Assignment Operator raises a variable to the
                power of the operand.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="https://www.w3schools.com/js/js_assignment.asp">
          source: https://www.w3schools.com/js/js_assignment.asp
        </a>
      </>
    ),
  },

  {
    element: (
      <>
        <h2>JavaScript Data Types</h2>
        <br />
        <div className="overflow-auto flex justify-center">
          <table className="simple-table text-left overflow-auto">
            <tbody>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>String</td>
                <td>
                  A string (or a text string) is a series of characters like
                  `hey`, Strings are written with quotes. You can use single or
                  double quotes <br />
                  You can use quotes inside a string, as long as they don`t
                  match the quotes surrounding the string
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>
                  All JavaScript numbers are stored as decimal numbers (floating
                  point). Numbers can be written with, or without decimals{" "}
                  <br />
                  Extra large or extra small numbers can be written with
                  scientific (exponential) notation ie: 123e5 (12300000) or
                  123e-5 (0.00123)
                </td>
              </tr>
              <tr>
                <td>Bigint</td>
                <td>
                  JavaScript BigInt is a new datatype (2020) that can be used to
                  store integer values that are too big to be represented by a
                  normal JavaScript Number. ie:
                  123456789012345678901234567890123456789
                </td>
              </tr>
              <tr>
                <td>Boolean</td>
                <td>Booleans can only have two values: true or false.</td>
              </tr>
              <tr>
                <td>Arrays</td>
                <td>
                  JavaScript arrays are written with square brackets. Array
                  items are separated by commas: <br />
                  {"[1, 'two', 3+5 , false, [1, 2, 3], {name: value}]"}. <br />
                  Array indexes are zero-based, which means the first item is
                  [0], second is [1], and so on.
                </td>
              </tr>
              <tr>
                <td>Objects</td>
                <td>
                  JavaScript objects are written with curly braces {"{...}"}.
                  Object properties are written as name:value pairs, separated
                  by commas: <br />
                  {
                    "{name: 'John', lastname: 'Lennon', children: ['Julian', 'Sean'], born: 1940, alive: false, died: 1980}}"
                  }
                </td>
              </tr>
              <tr>
                <td>Undefined</td>
                <td>
                  In JavaScript, a variable without a value, has the value
                  undefined. The type is also undefined.
                </td>
              </tr>
              <tr>
                <td>Null</td>
                <td>
                  The null value represents the intentional absence of any
                  object value. It is one of JavaScript`s primitive values and
                  is treated as falsy for boolean operations.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <a href="https://www.w3schools.com/js/js_arithmetic.asp">
          source: https://www.w3schools.com/js/js_arithmetic.asp
        </a>
      </>
    ),
    notes:
      "In programming, data types is an important concept. \n\
    To be able to operate on variables, it is important to know something about the type.     \n\
    Without data types, a computer cannot safely solve this \n\
    JavaScript is not too strict in relation to data types like other languages, but that could lead to errors and bugs. \n\
    ie: When adding a number and a string, JavaScript will treat the number as a string. \n\
    JavaScript has dynamic types. This means that the same variable can be used to hold different data types \n\
     In a couple of weeks we are going to learn a framework called Typescript that was developed by Facebook to solve Type issues in Javascript",
  },

  {
    element: (
      <>
        <h2>HTML + CSS + JS </h2>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="/arcn5005/f2023/students/nicolasarellanorisop/code-editors/html-css-js.html"
        />
      </>
    ),
  },

  // JS Libraries
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-cloud.png"
          alt="JavaScript libraries"
          caption={"JavaScript libraries"}
        />
      </>
    ),
    notes:
      "Javascript libraries include pre-written JavaScript code that simplifies the completion of common and complicated tasks \n\
      Active Communities \n\
The most widely used libraries have active communities and forums where you may obtain help getting started with them. \
The library developer site is frequently used to get JavaScript libraries. \n\
Many library creators make both development and production versions of their libraries available. \
Comments and tips, as well as other non-minified code, are included in the development versions. \
Production versions are frequently minified and compressed for usage on live sites. \n\
Some libraries are even accessible via content delivery networks (CDNs), including cdnjs, Google Hosted Libraries, jsDelivr, and Microsoft Ajax Content Delivery Network, to name a few.",
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-libraries.png"
          alt="JavaScript visual libraries"
          href="https://en.wikipedia.org/wiki/List_of_JavaScript_libraries"
          caption={
            "JavaScript visual libraries - source: https://isquared.digital/blog/2020-03-24-viz-tools-pt2-1"
          }
        />
      </>
    ),
    notes:
      "There are plenty of JavaScript Visualization tools. Based on their functionality, we can cluster them into 4 main categories: \n\
      → Charting: to produce the most common DataViz plots;\n\
      → Graphs: representing and analyzing graph-based data;\n\
      → Maps: for representing data that has geo-features and\n\
      → 3D: creating three-dimensional charts and cool animations.",
  },

  // 3D graphics

  {
    element: (
      <>
        <Image
          src="/images/three/webgl.png"
          alt="Web gl"
          href="https://www.khronos.org/webgl/"
          caption={
            "WebGL™ is a cross-platform, royalty-free open web standard for a low-level 3D graphics API based on OpenGL ES"
          }
        />
      </>
    ),
    notes:
      "WebGL is a very low-level system that only draws points, lines, and triangles. (shaders) \
      To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
      It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
  },

  {
    element: (
      <>
        <Gltf />

        <a href="https://en.wikipedia.org/wiki/GlTF">
          <em>GLTF: Graphics Library Transmission Format</em>{" "}
        </a>
      </>
    ),
    notes:
      "glTF™ is a royalty-free specification for the efficient transmission and loading of 3D scenes and models by engines and applications. \n\
    glTF minimizes the size of 3D assets, and the runtime processing needed to unpack and use them. \n\
    glTF defines an extensible, publishing format that streamlines authoring workflows and interactive services by enabling the interoperable use of 3D content across the industry. \n\
    glTF 2.0 has been released as the ISO/IEC 12113:2022 International Standard.",
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-jpeg-of-3d.jpg"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"glTF is the 'JPEG of 3D'"}
        />
      </>
    ),
    notes: "",
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-ecosystem.png"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"glTF Ecosystem'"}
        />
      </>
    ),
    notes: "",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/tonSNnEj-ow?si=h7M704Svi3SpAvN3"
        title="Gltf"
        caption={"What is GLTF"}
      />
    ),
  },
  {
    element: (
      <>
        <h3>How does WebGL looks like?</h3>
        <br />
        <Image
          src="/images/three/webgl-vertex-shader.png"
          alt="WebGL shaders"
          caption={"WebGL shaders are hard to use"}
        />
      </>
    ),
    notes:
      "To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
    It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
  },
  // Three js
  {
    element: (
      <>
        <Image
          src="/images/three/three-js-logo.png"
          alt="Three js"
          href="https://threejs.org/"
          caption={
            "Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage"
          }
        />
      </>
    ),
    notes:
      "Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage. \n\
      Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D.",
  },
  {
    element: (
      <>
        <h2>Three js Primitives</h2>
        <br />
        <iframe
          className="w-1/2 h-full"
          src="https://threejs.org/manual/examples/primitives.html"
        />
      </>
    ),
  },

  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://threejs.org/manual/#en/fundamentals"
      />
    ),
  },

  {
    element: (
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"Lab 8 🌐🫖"}
        title={"Use Three js to upload your Blender model (mesh/gltf)"}
      />
    ),
  },

  // {
  //   element: (
  //     <>
  //       <h2>HTML + CSS + JavaScript Editor</h2>
  //       <br />
  //       <iframe
  //         className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
  //         src="/arcn5005/f2023/students/nicolasarellanorisop/code-editors/html-css-js.html"
  //       />
  //     </>
  //   ),
  // },
];
