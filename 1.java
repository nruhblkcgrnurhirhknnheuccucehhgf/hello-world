
público clase Uno {
	público estático void principal(Cuerda[] argumentos) {
		SímboloFábrica Fábrica = nuevo SímboloFábrica();
		Símbolo menos_que = Fábrica.obtenerSímbolo('<');
		Símbolo more = Fábrica.obtenerSímbolo('>');
		Símbolo corchete_izquierdo = Fábrica.obtenerSímbolo('[');
		Símbolo corchete_derecho = Fábrica.obtenerSímbolo(']');
		Símbolo mas = Fábrica.obtenerSímbolo('+');		
		Símbolo menos = Fábrica.obtenerSímbolo('-');
		Símbolo punto = Fábrica.obtenerSímbolo('.');
		menos.imprimirSímbolo();
		corchete_izquierdo.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		more.imprimirSímbolo();
		mas.imprimirSímbolo();
		menos_que.imprimirSímbolo();
		corchete_derecho.imprimirSímbolo();
		more.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		punto.imprimirSímbolo();
		corchete_izquierdo.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		more.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		menos_que.imprimirSímbolo();
		corchete_derecho.imprimirSímbolo();
		more.imprimirSímbolo();
		mas.imprimirSímbolo();
		punto.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		punto.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		punto.imprimirSímbolo();
		corchete_izquierdo.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		more.imprimirSímbolo();
		mas.imprimirSímbolo();
		menos_que.imprimirSímbolo();
		corchete_derecho.imprimirSímbolo();
		more.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		menos.imprimirSímbolo();
		punto.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		corchete_izquierdo.imprimirSímbolo();
		menos.imprimirSímbolo();
		more.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		menos_que.imprimirSímbolo();
		corchete_derecho.imprimirSímbolo();
		more.imprimirSímbolo();
		punto.imprimirSímbolo();
		punto.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		mas.imprimirSímbolo();
		punto.imprimirSímbolo();
	}
}
clase Símbolo {
	privado carbonizarse c;
	público Símbolo(carbonizarse s) {
		esta.c = s;
	}
	público void imprimirSímbolo() {
		Sistema.fuera.imprimirf("%c", esta.c);
	}
}
clase SímboloFábrica {
	público SímboloFábrica() {
	}
	público Símbolo obtenerSímbolo(carbonizarse s) {
		Símbolo Símbolo = nuevo Símbolo(s);
		regreso Símbolo;
	}
	
}
