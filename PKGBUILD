# Maintainer: Thomas Quillan <tjquillan@gmail.com>

pkgname=intellij-idea-community-edition-jre
_appname=jetbrains-idea-ce
pkgver=2018.2.1
_buildver=182.3911.36
pkgrel=1
pkgdesc="Intellij Idea Community Edition with bundled JRE"
arch=('any')
url="http://www.jetbrains.com/idea/"
license=("Apache2")
depends=("giflib" "libxtst")
provides=("$_appname")
conflicts=("$_appname")
source=("https://download.jetbrains.com/idea/ideaIC-$pkgver.tar.gz"
	"$_appname.desktop")
md5sums=('7e9f9bf36acb2e2e5f62b88e81337e92'
         '56d945e72cc22162d5be26af027999dd')

package() {
	install -d "$pkgdir"/{usr/share/$_appname,usr/bin}
	mv idea-IC-${_buildver}/* "$pkgdir"/usr/share/$_appname

	# make sure that all files are owned by root
	chown -R root:root "$pkgdir/usr/share"

	# https://youtrack.jetbrains.com/issue/IDEA-185828
	chmod +x "$pkgdir"/usr/share/$_appname/plugins/maven/lib/maven3/bin/mvn

	ln -s /usr/share/$_appname/bin/idea.sh "$pkgdir"/usr/bin/idea-ce
	install -D -m644 "$srcdir"/jetbrains-idea-ce.desktop "$pkgdir"/usr/share/applications/jetbrains-idea-ce.desktop
	install -D -m644 "$pkgdir"/usr/share/$_appname/bin/idea.png "$pkgdir"/usr/share/pixmaps/"$_appname".png

	# workaround FS#40934
	sed -i 's|lcd|on|'  "$pkgdir"/usr/share/$_appname/bin/*.vmoptions
}
