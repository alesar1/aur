# Maintainer: Thomas Quillan <tjquillan@gmail.com>

pkgname=intellij-idea-community-edition-no-jre
_appname=jetbrains-idea-ce
pkgver=2020.2.1
_buildver=202.6948.69
pkgrel=1
pkgdesc="Intellij Idea Community Edition without bundled JRE"
arch=('any')
url="http://www.jetbrains.com/idea/"
license=("Apache2")
depends=('giflib' 'libxtst' 'java-environment' 'python' 'sh' 'ttf-font' 'libdbusmenu-glib')
provides=("$_appname")
conflicts=("$_appname")
source=("https://download.jetbrains.com/idea/ideaIC-$pkgver-no-jbr.tar.gz"
		"$_appname.desktop")
sha256sums=('8f44300f663418a6209210f1539d189874a6c41b28845ba3a0095d10844da5a8'
            '91aa66e16e428d595c9f76a02f5a6d54d6fb0b1d1ccac4159cfb7070cff26a4b')

package() {
	cd idea-IC-"$_buildver"

	# workaround FS#40934
	sed -i 's/lcd/on/' bin/*.vmoptions

	install -dm 755 "$pkgdir"/usr/bin
	install -dm 755 "$pkgdir"/usr/share/{licenses,pixmaps,"$_appname",icons/hicolor/scalable/apps}
	cp -dr --no-preserve='ownership' bin lib plugins redist build.txt product-info.json "$pkgdir"/usr/share/"$_appname/"
	cp -dr --no-preserve='ownership' license "$pkgdir"/usr/share/licenses/"$_appname"
	ln -s /usr/share/"$_appname"/bin/idea.png "$pkgdir"/usr/share/pixmaps/"$_appname".png
	ln -s /usr/share/"$_appname"/bin/idea.svg "${pkgdir}"/usr/share/icons/hicolor/scalable/apps/"$_appname".svg
	install -Dm 644 ../"$_appname".desktop -t "$pkgdir"/usr/share/applications/
	ln -s /usr/share/"$_appname"/bin/idea.sh "$pkgdir"/usr/bin/idea-ce
}
