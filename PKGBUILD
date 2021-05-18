# Maintainer: Márcio Sousa Rocha <marciosr10@gmail.com>
 
pkgname=irpf
pkgver=2021.1.5
pkgrel=2
license=('custom')
 
arch=(any)
pkgdesc='Programa Oficial da Receita para elaboração do IRPF'
url='https://www.receita.fazenda.gov.br'
 
source=(https://downloadirpf.receita.fazenda.gov.br/irpf/2021/irpf/arquivos/IRPF2021-1.5.zip
	Copyright
	$pkgname.png
	$pkgname.desktop
	$pkgname)
 
md5sums=('843d9e83e5c421a00b349f2a4e191a04'
         '0b81ed3a0a6200d2706caf541756d55d'
         '43d8c9617118578f03b2c4eeb1c72c57'
         '5c3f364ed6e30e8aac69ad4394deabba'
         'a3343e87932f90696d08d0bd015ea89b')
 
depends=('java-runtime' 'hicolor-icon-theme' 'sh')

 
 
package() {
	cd "$srcdir"/IRPF2021

	mkdir -p "$pkgdir"/usr/share/{icons/hicolor/128x128/apps,applications,licenses/irpf,irpf}
	mkdir "$pkgdir"/usr/bin
       

	cp -rf lib "$pkgdir"/usr/share/irpf/
	cp -rf lib-modulos "$pkgdir"/usr/share/irpf/
	cp -rf help "$pkgdir"/usr/share/irpf/
      
	install -Dm755 irpf.jar "$pkgdir"/usr/share/irpf/

	install -Dm644 Leia-me.htm "$pkgdir"/usr/share/irpf/
	install -Dm644 offline.png "$pkgdir"/usr/share/irpf/
	install -Dm644 online.png "$pkgdir"/usr/share/irpf/
	install -Dm644 pgd-updater.jar "$pkgdir"/usr/share/irpf/

	install -Dm755 "$srcdir"/irpf "$pkgdir"/usr/bin/
       
	install -Dm644 "$srcdir"/Copyright "$pkgdir"/usr/share/licenses/irpf/
       
	install -Dm644 "$srcdir"/irpf.png "$pkgdir"/usr/share/icons/hicolor/128x128/apps/
	install -Dm644 "$srcdir"/irpf.desktop "$pkgdir"/usr/share/applications/
}
