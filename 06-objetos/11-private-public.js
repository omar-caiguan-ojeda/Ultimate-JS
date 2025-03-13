function Usuario() {
    this.name = 'Omar';
    let id = 1;
    let log = function() {
        console.log('logging...');
    }

    this.guardar = function () {
        log();
        console.log('guardando...');
    }
};

const usuario = new Usuario();
usuario.log = function() {
    console.log('lala');
};

// usuario.log();
usuario.guardar()