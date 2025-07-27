const cursos = [
  { id: 1, nombre: "Cálculo I para ingeniería", nivel: 1 },
  { id: 2, nombre: "Algebra I para ingeniería", nivel: 1 },
  { id: 3, nombre: "Física I para ingeniería", nivel: 1 },
  { id: 4, nombre: "Introducción al diseño en ingeniería", nivel: 1 },
  { id: 5, nombre: "Química general para ingeniería", nivel: 1 },
  { id: 6, nombre: "Cálculo Il para ingeniería", nivel: 2, prereq: [1] },
  { id: 7, nombre: "Álgebra Il para ingeniería", nivel: 2, prereq: [2] },
  { id: 8, nombre: "Física Il para ingeniería", nivel: 2, prereq: [3] },
  { id: 9, nombre: "Fundamentos de programación para ingeniería", nivel: 2, prereq: [4] },
  { id: 10, nombre: "Métodos gráficos para ingeniería en minas", nivel: 2, prereq: [4] },
  { id: 11, nombre: "Análisis estadístico para ingeniería en minas", nivel: 2, prereq: [4] },
  { id: 12, nombre: "Inglés I", nivel: 3 },
  { id: 13, nombre: "Cálculo Ill para ingeniería", nivel: 3, prereq: [6] },
  { id: 14, nombre: "Fundamentos de economía para ingeniería", nivel: 3, prereq: [1] },
  { id: 15, nombre: "Termodinámica y físico química", nivel: 3, prereq: [5] },
  { id: 16, nombre: "Electricidad y electrotecnia", nivel: 3, prereq: [8] },
  { id: 17, nombre: "Geología general y estructural", nivel: 3, prereq: [10] },
  { id: 18, nombre: "Ingles Il", nivel: 4, prereq: [12] },
  { id: 19, nombre: "Taller de diseño en ingeniería", nivel: 4, prereq: [14] },
  { id: 20, nombre: "Ecuaciones diferenciales y métodos numéricos para ingeniería", nivel: 4, prereq: [6, 7] },
  { id: 21, nombre: "Métodos de explotación", nivel: 4, prereq: [17] },
  { id: 22, nombre: "Mineralogía y petrografía", nivel: 4, prereq: [17] },
  { id: 23, nombre: "Mecánica de fluidos", nivel: 4, prereq: [13, 15] },
  { id: 24, nombre: "Ingles III", nivel: 5, prereq: [18] },
  { id: 25, nombre: "Voladura de rocas", nivel: 5, prereq: [21] },
  { id: 26, nombre: "Geomensura de minas", nivel: 5, prereq: [21] },
  { id: 27, nombre: "Geología económica y de minas", nivel: 5, prereq: [22] },
  { id: 28, nombre: "Resistencia de materiales", nivel: 5, prereq: [8, 19] },
  { id: 29, nombre: "Ingeniería económica y evaluación de proyectos", nivel: 5, prereq: [19] },
  { id: 30, nombre: "Ingles IV", nivel: 6, prereq: [24] },
  { id: 31, nombre: "Carguío y trasporte", nivel: 6, prereq: [25] },
  { id: 32, nombre: "Modelación y simulación", nivel: 6, prereq: [9, 20] },
  { id: 33, nombre: "Procesos mineralúrgicos", nivel: 6, prereq: [22, 25] },
  { id: 34, nombre: "Mecánica de rocas I", nivel: 6, prereq: [27, 28] },
  { id: 35, nombre: "Administración de empresas", nivel: 6, prereq: [29] },
  { id: 36, nombre: "Estimación de recursos mineros", nivel: 7, prereq: [27, 32] },
  { id: 37, nombre: "Optimización", nivel: 7, prereq: [32] },
  { id: 38, nombre: "Servicios generales mina", nivel: 7, prereq: [16, 23] },
  { id: 39, nombre: "Concentración de minerales", nivel: 7, prereq: [33] },
  { id: 40, nombre: "Mecánica de rocas Il", nivel: 7, prereq: [25, 34] },
  { id: 41, nombre: "Seguridad minera y salud ocupacional", nivel: 7, prereq: [35] },
  { id: 42, nombre: "Procesos metalúrgicos", nivel: 8, prereq: [39] },
  { id: 43, nombre: "Economía minera", nivel: 8, prereq: [36] },
  { id: 44, nombre: "Gestión en las operaciones unitarias", nivel: 8, prereq: [31] },
  { id: 45, nombre: "Tecnologías avanzadas para minería", nivel: 8, prereq: [16, 37] },
  { id: 46, nombre: "Liderazgo", nivel: 8, prereq: [35] },
  { id: 47, nombre: "Ventilación de minas", nivel: 8, prereq: [25, 38] },
  { id: 48, nombre: "Tópico de especialidad I", nivel: 9, prereq: [24, 25, 26, 27, 28, 29] },
  { id: 49, nombre: "Administración y gestión de proyectos mineros", nivel: 9, prereq: [35, 44] },
  { id: 50, nombre: "Sustentabilidad minera", nivel: 9, prereq: [42, 44] },
  { id: 51, nombre: "Diseño y planificación mina cielo abierto", nivel: 9, prereq: [40, 43] },
  { id: 52, nombre: "Diseño y planificación mina subterránea", nivel: 9, prereq: [40, 47] },
  { id: 53, nombre: "Electivo I", nivel: 9, prereq: [24, 25, 26, 27, 28, 29] },
  { id: 54, nombre: "Tópico de especialidad II", nivel: 10, prereq: [24, 25, 26, 27, 28, 29] },
  { id: 55, nombre: "Legislación laboral y minera", nivel: 10, prereq: [35] },
  { id: 56, nombre: "Taller de evaluación de proyectos metalúrgicos", nivel: 10, prereq: [42, 49] },
  { id: 57, nombre: "Taller de proyecto mina subterránea", nivel: 10, prereq: [52] },
  { id: 58, nombre: "Taller de proyecto mina cielo abierto", nivel: 10, prereq: [51] },
  { id: 59, nombre: "Electivo II", nivel: 10, prereq: [24, 25, 26, 27, 28, 29] },
  { id: 60, nombre: "Trabajo de titulación", nivel: 11, prereq: [54, 55, 56, 57, 58, 59] },
  { id: 61, nombre: "Casarse con Alanis Villagrán el amor de tu vida", nivel: 11, prereq: [60] },
];

const aprobados = JSON.parse(localStorage.getItem('aprobados')) || [];

function guardarEstado() {
  localStorage.setItem('aprobados', JSON.stringify(aprobados));
}

function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.display = "block";
  setTimeout(() => mensaje.style.display = "none", 4000);
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const niveles = [...new Set(cursos.map(c => c.nivel))].sort((a, b) => a - b);

  niveles.forEach(nivel => {
    const seccion = document.createElement("section");
    seccion.className = "nivel";
    const titulo = document.createElement("h2");
    titulo.textContent = `Nivel ${nivel}`;
    seccion.appendChild(titulo);

    cursos
      .filter(c => c.nivel === nivel)
      .forEach(curso => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = curso.nombre;
        div.dataset.id = curso.id;

        if (aprobados.includes(curso.id)) {
          div.classList.add("aprobado");
        } else if (curso.prereq && !curso.prereq.every(r => aprobados.includes(r))) {
          div.classList.add("bloqueado");
        }

        div.addEventListener("click", () => manejarClick(curso, div));
        seccion.appendChild(div);
      });

    contenedor.appendChild(seccion);
  });
}

function manejarClick(curso, elemento) {
  if (elemento.classList.contains("bloqueado")) {
    const faltantes = curso.prereq.filter(p => !aprobados.includes(p))
      .map(id => cursos.find(c => c.id === id).nombre)
      .join(", ");
    mostrarMensaje(`No puedes aprobar "${curso.nombre}". Faltan: ${faltantes}`);
    return;
  }

  if (aprobados.includes(curso.id)) {
    aprobados.splice(aprobados.indexOf(curso.id), 1);
    elemento.classList.remove("aprobado");
  } else {
    if (curso.prereq && !curso.prereq.every(p => aprobados.includes(p))) {
      mostrarMensaje("No cumples los requisitos para aprobar este ramo.");
      return;
    }
    aprobados.push(curso.id);
    elemento.classList.add("aprobado");
  }

  guardarEstado();
  document.getElementById("malla").innerHTML = "";
  crearMalla();
}

crearMalla();

