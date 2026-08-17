//  ATAJOS PRINCIPALES
const shortcuts = [

    {
        name: "Seleccionar",
        combo: ["Q"],
        keys: ["Q"],
        description:
            "Activa la herramienta de selección y esconde las flechas.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Mover",
        combo: ["W"],
        keys: ["W"],
        description:
            "Activa la herramienta para Mover.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Rotar",
        combo: ["E"],
        keys: ["E"],
        description:
            "Activa la herramienta para Rotar.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Escalar",
        combo: ["R"],
        keys: ["R"],
        description:
            "Activa la herramienta para Escalar.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Manipulador",
        combo: ["T"],
        keys: ["T"],
        description:
            "Muestra el manipulador correspondiente.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Foco",
        combo: ["F"],
        keys: ["F"],
        description:
            "Hace foco sobre el objeto seleccionado.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Seleccionar varios elementos",
        combo: ["⇧SHIFT", "+", "CLICK"],
        keys: ["SHIFT"],
        mouse: ["LEFT"],
        description:
            "Permite añadir elementos a la selección.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Seleccionar multiples elementos",
        combo: ["⇧SHIFT", "+", "ARRASTRAR"],
        keys: ["SHIFT"],
        mouse: ["LEFT"],
        mouseAction: "drag",
        description:
            "Realiza una selección múltiple según el contexto.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Clonar",
        combo: ["⇧SHIFT", "+", "ARRASTRAR"],
        keys: ["SHIFT"],
        mouse: ["LEFT"],
        mouseAction: "drag",
        description:
            "Con la W activa, arrastra en cualquiera de las flechas para clonar. (Modo objeto)",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Aumentar tamaño del manipulador",
        combo: ["+"],
        keys: ["PLUS"],
        description:
            "Aumenta el tamaño del manipulador.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Reducir tamaño del manipulador",
        combo: ["−"],
        keys: ["MINUS"],
        description:
            "Reduce el tamaño del manipulador.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Cámaras por defecto",
        combo: ["BARRA ESPACIADORA"],
        keys: ["SPACE"],
        description:
            "Pulsa la barra espaciadora para mostrar las vistas y cámaras por defecto.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Borrar",
        combo: ["⌫DELETE"],
        keys: ["DELETE"],
        description:
            "Borra el objeto seleccionado.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Rotar cámara",
        combo: ["⌥OPTION", "+", "ARRASTRAR"],
        keys: ["OPTION"],
        mouse: ["LEFT"],
        mouseAction: "drag",
        description:
            "Rota la cámara en la escena.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Acercar o Alejar cámara",
        combo: ["⌥OPTION", "+", "ARRASTRAR"],
        keys: ["OPTION"],
        mouse: ["RIGHT"],
        mouseAction: "drag",
        description:
            "Hace zoom con la cámara en la escena.",
        target: "keyboard-section",
        list: "shortcut-list"
    },
    {
        name: "Panear con la cámara",
        combo: ["⌥OPTION", "+", "ARRASTRAR"],
        keys: ["OPTION"],
        mouse: ["MIDDLE"],
        mouseAction: "drag",
        description:
            "Hace paneo con la cámara en la escena.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Guardar escena",
        combo: ["⌘COMMAND", "+", "S"],
        keys: ["CMD", "S"],
        description:
            "Guarda la escena actual.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Deshacer",
        combo: ["⌘COMMAND", "+", "Z"],
        keys: ["CMD", "Z"],
        description:
            "Deshace la última acción.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Rehacer",
        combo: ["⌘COMMAND", "+", "Y"],
        keys: ["CMD", "Y"],
        description:
            "Rehace la última acción.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Multi-Cut perfecto",
        combo: ["⌃CONTROL", "+", "CLICK RUEDITA"],
        keys: ["CONTROL"],
        mouse: ["MIDDLE"],
        description:
            "Realiza cortes precisos por la mitad.",
        target: "keyboard-section",
        list: "shortcut-list"
    },

    {
        name: "Wireframe",
        combo: ["⌥OPTION", "+", "5"],
        keys: ["OPTION", "5"],
        description:
            "Muestra el wireframe sobre el objeto.",
        target: "keyboard-section",
        list: "shortcut-list"
    },
    {
        name: "Ocultar",
        combo: ["H"],
        keys: ["H"],
        description:
            "Oculta el objeto seleccionado.",
        target: "keyboard-section",
        list: "shortcut-list"
    }

];

// ATAJOS SECUNDARIOS
const secondaryShortcuts = [

    {
        name: "Arroba",
        combo: ["⌥OPTION", "+", "Q"],
        keys: ["OPTION", "Q"],
        description:
            "Combinación para escribir @.",
        target: "keyboard-section",
        list: "secondary-shortcut-list"
    },

    {
        name: "Copiar",
        combo: ["⌘COMMAND", "+", "C"],
        keys: ["CMD", "C"],
        description:
            "Combinación para copiar.",
        target: "keyboard-section",
        list: "secondary-shortcut-list"
    },

    {
        name: "Pegar",
        combo: ["⌘COMMAND", "+", "V"],
        keys: ["CMD", "V"],
        description:
            "Combinación para pegar.",
        target: "keyboard-section",
        list: "secondary-shortcut-list"
    },

    {
        name: "Guión Bajo",
        combo: ["⇧SHIFT", "+", "MENOS"],
        keys: ["SHIFT", "MINUS"],
        description:
            "Combinación para escribir _ .",
        target: "keyboard-section",
        list: "secondary-shortcut-list"
    }

];

// MODELING TOOLKIT
const modelingToolkit = [

    {
        name: "<span>-</span>Modo Objeto",
        description:
            "Interactua con el objeto completo.",
        target: "object",
        list: "modeling-toolkit-list"
    },
    {
        name: "<span>-</span>Modo Vértice",
        description:
            "Interactua con los vértices del objeto.",
        target: "vertex",
        list: "modeling-toolkit-list"
    },
    {
        name: "<span>-</span>Modo Arista",
        description:
            "Interactua con las aristas del objeto.",
        target: "edge",
        list: "modeling-toolkit-list"
    },
    {
        name: "<span>-</span>Modo Cara",
        description:
            "Interactua con las caras del objeto.",
        target: "face",
        list: "modeling-toolkit-list"
    },
    {
        name: "Bevel",
        description:
            "Redondea las aristas del objeto.",
        target: "bevel",
        list: "modeling-toolkit-list"
    },
    {
        name: "Bridge",
        description:
            "Crea un puente entre componentes de un objeto.",
        target: "bridge",
        list: "modeling-toolkit-list"
    },
    {
        name: "Combine",
        description:
            "Combina varias piezas en un solo objeto.",
        target: "combine",
        list: "modeling-toolkit-list"
    },
    {
        name: "Connect",
        description:
            "Conecta los componentes de un mismo objeto.",
        target: "connect",
        list: "modeling-toolkit-list"
    },
    {
        name: "Extrude",
        description:
            "Crea geometria a partir de un componente.",
        target: "extrude",
        list: "modeling-toolkit-list"
    },
    {
        name: "Multi-cut",
        description:
            "Conecta los componentes de un mismo objeto de forma interactiva.",
        target: "multi-cut",
        list: "modeling-toolkit-list"
    },
    {
        name: "Separate",
        description:
            "Separa un objeto combinado.",
        target: "separate",
        list: "modeling-toolkit-list"
    }

];

// POLY MODELING
const polyModeling = [

    {
        name: "Centrar Pivote",
        description:
            "Centra el pivote del objeto seleccionado.",
        target: "center-pivot",
        list: "poly-modeling-list"
    },
    {
        name: "Cilindro",
        description:
            "Crea un cilindro.",
        target: "cylinder",
        list: "poly-modeling-list"
    },
    {
        name: "Cono",
        description:
            "Crea un cono.",
        target: "cone",
        list: "poly-modeling-list"
    },
    {
        name: "Cubo",
        description:
            "Crea un cubo.",
        target: "cube",
        list: "poly-modeling-list"
    },
    {
        name: "Esfera",
        description:
            "Crea una esfera.",
        target: "sphere",
        list: "poly-modeling-list"
    },
    {
        name: "Torus",
        description:
            "Crea un torus.",
        target: "torus",
        list: "poly-modeling-list"
    }
];

// GIZMOS
const gizmos = [

    {
        name: "Escalar (E)",
        description:
            "Ejes para escalar el objeto.",
        target: "scale",
        list: "gizmos-list"
    },
    {
        name: "Manipulador (T)",
        description:
            "Muestra el manipulador y sus opciones.",
        target: "manipulator",
        list: "gizmos-list"
    },
    {
        name: "Mover (W)",
        description:
            "Ejes para mover el objeto.",
        target: "move",
        list: "gizmos-list"
    },
    {
        name: "Rotar (E)",
        description:
            "Ejes para rotar el objeto.",
        target: "rotate",
        list: "gizmos-list"
    },
    {
        name: "Seleccionar (Q)",
        description:
            "Selecciona el objeto y esconde los ejes.",
        target: "selection",
        list: "gizmos-list"
    }
];

// RENDER
const render = [

    {
        name: "Arnold",
        description:
            "Motor de renderizado.",
        target: "arnold",
        list: "render-list"
    },
    {
        name: "Asignar material",
        description:
            "Asignar un material al objeto seleccionado.",
        target: "assign-material",
        list: "render-list"
    },
    {
        name: "Atributos del material",
        description:
            "Muestra las opciones del material.",
        target: "material-attributes",
        list: "render-list"
    },
    {
        name: "Cámara",
        description:
            "Selecciona la cámara de trabajo.",
        target: "camara",
        list: "render-list"
    },
    {
        name: "Cámara nueva",
        description:
            "Crea una nueva cámara.",
        target: "camara-new",
        list: "render-list"
    },
    {
        name: "Color",
        description:
            "Modifica el color del material.",
        target: "color",
        list: "render-list"
    },
    {
        name: "Configuración",
        description:
            "Modifica las opciones del render.",
        target: "settings",
        list: "render-list"
    },
    {
        name: "Crear material",
        description:
            "Crear un material al objeto seleccionado.",
        target: "new-material",
        list: "render-list"
    },
    {
        name: "Domo",
        description:
            "Crea un domo que ilumina la escena.",
        target: "dome",
        list: "render-list"
    },
    {
        name: "Grilla de resolución",
        description:
            "Muestra lo que se ve en el render final.",
        target: "resolution-gate",
        list: "render-list"
    },
    {
        name: "HDRI archivo",
        description:
            "Configura el domo para cargar archivo.",
        target: "hdri-file",
        list: "render-list"
    },
    {
        name: "HDRI imagen",
        description:
            "Carga una imagen EXR.",
        target: "hdri-image",
        list: "render-list"
    },
    {
        name: "Metalicidad",
        description:
            "Modifica la metalicidad del material.",
        target: "metalness",
        list: "render-list"
    },
    {
        name: "Rugocidad",
        description:
            "Modifica la rugosidad del material.",
        target: "roughness",
        list: "render-list"
    },
    {
        name: "Nombrar material",
        description:
            "Assignar un nombre al material.",
        target: "material-name",
        list: "render-list"
    },
    {
        name: "Arnold Shader",
        description:
            "Assignar un shader al objeto.",
        target: "material-shader",
        list: "render-list"
    }
];

// MISC
const misc = [

    {
        name: "Abrir",
        description:
            "Abre una escena.",
        target: "open",
        list: "misc-list"
    },
    {
        name: "Channel Box",
        description:
            "Propiedades del objeto.",
        target: "channel-box",
        list: "misc-list"
    },
    {
        name: "Deshacer",
        description:
            "Deshacer la última acción.",
        target: "undo",
        list: "misc-list"
    },
    {
        name: "Guardar escena",
        description:
            "Guarda la escena actual.",
        target: "save-scene",
        list: "misc-list"
    },
    {
        name: "Guardar escena como",
        description:
            "Guarda la escena actual con otro nombre.",
        target: "save-scene-as",
        list: "misc-list"
    },
    {
        name: "Nomenclatura",
        description:
            "Establece el nombre del archivo.",
        target: "nomenclature",
        list: "misc-list"
    },
    {
        name: "Outliner",
        description:
            "Organizador de la escena.",
        target: "outliner",
        list: "misc-list"
    },
    {
        name: "Rehacer",
        description:
            "Rehacer la última acción.",
        target: "redo",
        list: "misc-list"
    }
];

// Super Array para busqueda ordenado alfabeticamente
const allContent = [...shortcuts, ...secondaryShortcuts, ...polyModeling, ...modelingToolkit, ...gizmos, ...render, ...misc].toSorted((a, b) => a.name.localeCompare(b.name));


// ELEMENTOS DOM

// Aside Items

// All Lists in the sidebar
const itemLists =
    document.querySelectorAll(
        ".shortcut-grid"
    );

// Search bar
const searchInput =
    document.getElementById("search");


// Main content

// Limpiar teclado
const keyboardKeys =
    document.querySelectorAll(".key");

// Limpiar mouse
const mouseButtons =
    document.querySelectorAll(
        ".mouse-button, .mouse-wheel"
    );

// Limpiar aside
const asideSections =
    document.querySelectorAll(
        ".shortcut-section"
    );

// Sin resultado
const noResults = document.createElement("div");
const searchContainer = document.getElementById("search-container");




// MODELING TOOLKIT MAIN
const modelingToolkitMAIN = [

    {
        id: "object",
        name: "Objeto",
        url: "images/modelingtoolkit/object.png",
        option: "modeling-toolkit-components-option"
    },
    {
        id: "vertex",
        name: "Vértice",
        url: "images/modelingtoolkit/vertex.png",
        option: "modeling-toolkit-components-option"
    },
    {
        id: "edge",
        name: "Arista",
        url: "images/modelingtoolkit/edge.png",
        option: "modeling-toolkit-components-option"
    },
    {
        id: "face",
        name: "Cara",
        url: "images/modelingtoolkit/face.png",
        option: "modeling-toolkit-components-option"
    },
    {
        id: "combine",
        name: "Combine",
        url: "images/modelingtoolkit/combine.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "separate",
        name: "Separate",
        url: "images/modelingtoolkit/separate.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "extrude",
        name: "Extrude",
        url: "images/modelingtoolkit/extrude.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "bevel",
        name: "Bevel",
        url: "images/modelingtoolkit/bevel.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "bridge",
        name: "Bridge",
        url: "images/modelingtoolkit/bridge.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "multi-cut",
        name: "Multi-cut",
        url: "images/modelingtoolkit/multi-cut.png",
        option: "modeling-toolkit-tools-option"
    },
    {
        id: "connect",
        name: "Connect",
        url: "images/modelingtoolkit/connect.png",
        option: "modeling-toolkit-tools-option"
    }
];


// POLY MODELING MAIN
const polyModelingMAIN = [

    {
        id: "center-pivot",
        name: "Centrar pivote",
        url: "images/polymodeling/center-pivot.png",
        option: "poly-modeling-option"
    },
    {
        id: "cube",
        name: "Cubo",
        url: "images/polymodeling/cube.png",
        option: "poly-modeling-option"
    },
    {
        id: "sphere",
        name: "Esfera",
        url: "images/polymodeling/sphere.png",
        option: "poly-modeling-option"
    },
    {
        id: "cylinder",
        name: "Cilindro",
        url: "images/polymodeling/cylinder.png",
        option: "poly-modeling-option"
    },
    {
        id: "cone",
        name: "Cono",
        url: "images/polymodeling/cone.png",
        option: "poly-modeling-option"
    },
    {
        id: "torus",
        name: "Torus",
        url: "images/polymodeling/torus.png",
        option: "poly-modeling-option"
    }


];

// GIZMOS MAIN
const gizmosMAIN = [

    {
        id: "selection",
        name: "Seleccionar (Q)",
        url: "images/gizmos/selection.png",
        option: "gizmos-option"
    },
    {
        id: "move",
        name: "Mover (W)",
        url: "images/gizmos/move.png",
        option: "gizmos-option"
    },
    {
        id: "rotate",
        name: "Rotar (E)",
        url: "images/gizmos/rotate.png",
        option: "gizmos-option"
    },
    {
        id: "scale",
        name: "Escalar (R)",
        url: "images/gizmos/scale.png",
        option: "gizmos-option"
    },
    {
        id: "manipulator",
        name: "Manipulador (T)",
        url: "images/gizmos/manipulator.png",
        option: "gizmos-option"
    }
];

// RENDER MAIN
const renderMAIN = [

    {
        id: "arnold",
        name: "Arnold",
        url: "images/render/arnold.png",
        option: "render-option"
    },
    {
        id: "camara",
        name: "Cámara",
        url: "images/render/camara.png",
        option: "render-option"
    },
    {
        id: "camara-new",
        name: "Cámara nueva",
        url: "images/render/camara-new.png",
        option: "render-option"
    },
    {
        id: "resolution-gate",
        name: "Grilla de resolución",
        url: "images/render/resolution-gate.png",
        option: "render-option"
    },
    {
        id: "dome",
        name: "Domo",
        url: "images/render/dome.png",
        option: "render-option"
    },
    {
        id: "hdri-file",
        name: "HDRI archivo",
        url: "images/render/hdri-file.png",
        option: "render-option"
    },
    {
        id: "hdri-image",
        name: "HDRI imagen",
        url: "images/render/hdri-image.png",
        option: "render-option"
    },
    {
        id: "settings",
        name: "Configuración",
        url: "images/render/settings.png",
        option: "render-option"
    },
    {
        id: "new-material",
        name: "Crear material",
        url: "images/render/new-material.png",
        option: "render-option"
    },
    {
        id: "assign-material",
        name: "Asignar material",
        url: "images/render/assign-material.png",
        option: "render-option"
    },
    {
        id: "material-attributes",
        name: "Atributos del material",
        url: "images/render/material-attributes.png",
        option: "render-option"
    },
    {
        id: "color",
        name: "Color",
        url: "images/render/color.png",
        option: "render-option"
    },
    {
        id: "metalness",
        name: "Metalicidad",
        url: "images/render/metalness.png",
        option: "render-option"
    },
    {
        id: "roughness",
        name: "Rugocidad",
        url: "images/render/roughness.png",
        option: "render-option"
    },
    {
        id: "material-name",
        name: "Nombrar material",
        url: "images/render/material-name.png",
        option: "render-option"
    },
    {
        id: "material-shader",
        name: "Arnold shader",
        url: "images/render/material-shader.png",
        option: "render-option"
    }
];

// MISC MAIN
const miscMAIN = [

    {
        id: "outliner",
        name: "Outliner",
        url: "images/misc/outliner.png",
        option: "misc-option"
    },
    {
        id: "channel-box",
        name: "Channel Box",
        url: "images/misc/channel-box.png",
        option: "misc-option"
    },
    {
        id: "undo",
        name: "Deshacer",
        url: "images/misc/undo.png",
        option: "misc-option"
    },
    {
        id: "redo",
        name: "Rehacer",
        url: "images/misc/redo.png",
        option: "misc-option"
    },
    {
        id: "save-scene",
        name: "Guardar escena",
        url: "images/misc/save-scene.png",
        option: "misc-option"
    },
    {
        id: "save-scene-as",
        name: "Guardar escena como",
        url: "images/misc/save-scene-as.png",
        option: "misc-option"
    },
    {
        id: "open",
        name: "Abrir",
        url: "images/misc/open.png",
        option: "misc-option"
    },
    {
        id: "nomenclature",
        name: "Nomenclatura",
        url: "images/misc/nomenclature.png",
        option: "misc-option"
    }
];


// Super Array para busqueda ordenado alfabeticamente
const allMain = [...modelingToolkitMAIN, ...polyModelingMAIN, ...gizmosMAIN, ...renderMAIN, ...miscMAIN].toSorted((a, b) => a.name.localeCompare(b.name));




// CREAR TARJETAS PARA ASIDE
function createShortcutCard(shortcut) {

    const card = document.createElement("div");
    card.className = "shortcut-item";

    if (shortcut.combo != undefined) {

        const comboHTML = shortcut.combo
            .map(key => `
                <span class="keyboard-key">
                    ${key}
                </span>
            `)
            .join("");

        card.innerHTML = `
          <div class="shortcut-combo">
            ${comboHTML}
          </div>`;

    }

    card.innerHTML = `
        ${card.innerHTML}
        <h3>${shortcut.name}</h3>
        <p class="shortcut-description">${shortcut.description}</p>
    `;

    card.addEventListener(
        "click",
        () => {

            clearKeyboard();

            highlightKeys(
                shortcut.keys || []
            );

            highlightMouse(
                shortcut.mouse || [],
                shortcut.mouseAction || null
            );

            const target =
                document.getElementById(
                    shortcut.target
                );


            if (!target) {
                return;
            }

            document
                .querySelectorAll(
                    ".shortcut-item"
                )
                .forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });

            card.classList.add(
                "selected"
            );

            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );


    return card;
}

// RENDER CARDS EN ASIDE
function renderShortcuts(allItems) {


    //Clear all lists
    itemLists.forEach(
        list => {
            list.innerHTML = "";
        }
    );

    // Render
    if (allItems.length > 0) {

        allItems.forEach(
            card => {
                const listName = document.getElementById(card.list);
                listName.appendChild(
                    createShortcutCard(
                        card
                    )
                );

            }
        );

        asideSections.forEach(section => {

            const shortcutGrid = document.querySelector(`#${section.id} .shortcut-grid`);
            if (shortcutGrid.innerHTML.length > 0) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
        noResults.innerHTML = "";

    } else {

        asideSections.forEach(section => {
            section.style.display = "none";
        });
        noResults.innerHTML = `
            <div class="shortcut-item no-results">
                <h3>No se encontraron resultados</h3>

                <p class="shortcut-description">
                    Prueba con otro atajo o nombre de herramienta.
                </p>
            </div>
        `;
        searchContainer.after(noResults);

    }

}

// LIMPIAR TECLADO
function clearKeyboard() {

    keyboardKeys.forEach(key => {

        key.classList.remove(
            "active"
        );

    });


    mouseButtons.forEach(button => {

        button.classList.remove(
            "active"
        );

    });


    const mouseWrapper =
        document.querySelector(".mouse-wrapper");

    if (mouseWrapper) {

        mouseWrapper.classList.remove(
            "mouse-dragging"
        );

    }

}

// RESALTAR TECLAS
function highlightKeys(keys) {

    keys.forEach(
        keyName => {

            document
                .querySelectorAll(
                    `.key[data-key="${keyName}"]`
                )
                .forEach(
                    key => {

                        key.classList.add(
                            "active"
                        );

                    }
                );

        }
    );

}

// RESALTAR MOUSE
function highlightMouse(buttons, action = null) {

    if (!buttons) {
        return;
    }

    const mouseWrapper =
        document.querySelector(".mouse-wrapper");


    /*
     * Limpiar estados anteriores
     */

    mouseWrapper.classList.remove(
        "mouse-dragging"
    );


    /*
     * Activar botones correspondientes
     */

    buttons.forEach(buttonName => {

        document
            .querySelectorAll(
                `[data-mouse="${buttonName}"]`
            )
            .forEach(button => {

                button.classList.add(
                    "active"
                );

            });

    });


    /*
     * Si la acción requiere arrastrar,
     * activar la animación del mouse.
     */

    if (action === "drag") {

        mouseWrapper.classList.add(
            "mouse-dragging"
        );

    }

}

// BÚSQUEDA
searchInput.addEventListener(
    "input",
    event => {

        const query = event.target.value
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        //  Limpiar teclado
        clearKeyboard();

        /*
         * =================================================
         * BUSCAR EN TODOS LOS ATAJOS Y HERRAMIENTAS
         * ================================================= */
        const allResults =
            allContent.filter(
                data => {

                    let searchableText =
                        [
                            data.name,
                            data.description,
                            data.id
                        ]

                    if (data.combo != undefined) {
                        searchableText.push(...data.combo.join(" "));
                    }

                    searchableText = searchableText
                        .join(" ")
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");


                    return searchableText.includes(
                        query
                    );

                }
            );


        /*
         * =================================================
         * MOSTRAR RESULTADOS
         * ================================================= */


        renderShortcuts(
            allResults
        );




    }
);

// ESTADO INICIAL
renderShortcuts(
    allContent
);




// CREAR OPCIONES EN MAIN CONTENT
function createToolCard(tool) {

    const card = document.createElement("div");
    card.className = "tool-card";
    card.id = tool.id;

    card.innerHTML = `
    <img src="${tool.url}" alt="${tool.name}">       
        <h3>${tool.name}</h3>        
    `;

    return card;
}


// RENDER CARDS EN MAIN CONTENT
function renderTools(allITools) {

    // Render
    allITools.forEach(
        tool => {
            const optionName = document.getElementById(tool.option);
            optionName.appendChild(
                createToolCard(
                    tool
                )
            );

        }
    );
}

// ESTADO INICIAL MAIN CONTENT
renderTools(
    allMain
);

