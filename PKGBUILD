# Maintainer: Thomas Quillan <tjquillan@gmail.com>

pkgname=intellij-idea-community-edition-jre
_appname=jetbrains-idea-ce
pkgver=2020.1.4
_buildver=201.8743.12
pkgrel=1
pkgdesc="Intellij Idea Community Edition with bundled JRE"
arch=('any')
url="http://www.jetbrains.com/idea/"
license=("Apache2")
depends=('giflib' 'libxtst' 'python' 'sh' 'ttf-font' 'libdbusmenu-glib')
provides=("$_appname")
conflicts=("$_appname")
source=("https://download.jetbrains.com/idea/ideaIC-$pkgver.tar.gz"
		"$_appname.desktop")
sha256sums=('0f66522ebb379e9283feb98beefca23e5328157163e37feae484a5d1c28ebd94'
            '91aa66e16e428d595c9f76a02f5a6d54d6fb0b1d1ccac4159cfb7070cff26a4b')

package() {
	cd idea-IC-"$_buildver"

	# workaround FS#40934
	sed -i 's/lcd/on/' bin/*.vmoptions

	install -dm 755 "$pkgdir"/usr/bin
	install -dm 755 "$pkgdir"/usr/share/{licenses,pixmaps,"$_appname",icons/hicolor/scalable/apps}
	cp -dr --no-preserve='ownership' bin jbr lib plugins redist build.txt product-info.json "$pkgdir"/usr/share/"$_appname/"
	cp -dr --no-preserve='ownership' license "$pkgdir"/usr/share/licenses/"$_appname"
	ln -s /usr/share/"$_appname"/bin/idea.png "$pkgdir"/usr/share/pixmaps/"$_appname".png
	ln -s /usr/share/"$_appname"/bin/idea.svg "${pkgdir}"/usr/share/icons/hicolor/scalable/apps/"$_appname".svg
	install -Dm 644 ../"$_appname".desktop -t "$pkgdir"/usr/share/applications/
	ln -s /usr/share/"$_appname"/bin/idea.sh "$pkgdir"/usr/bin/idea-ce
}
