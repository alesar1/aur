# Maintainer: Ole Jon Bjørkum <mail at olejon dot net>

pkgname=spotcommander
pkgver=13.1
pkgrel=1
pkgdesc="The most intuitive and feature-rich remote control for Spotify for Linux."
arch=('any')
url="http://www.olejon.net/code/spotcommander"
license=('GPL3')
depends=('apache' 'php' 'php-apache' 'php-sqlite' 'qt4' 'inotify-tools' 'xdotool' 'xautomation' 'python2-xdg')
optdepends=('pulseaudio' 'pulseaudio-alsa')
install=$pkgname.install
source=($url/files/$pkgname-$pkgver.tar.bz2)
md5sums=('6776c4ae4d837a9ec64ba49ed58475f7')

package()
{
	mkdir -p $pkgdir/usr/share/webapps
	mv $srcdir/$pkgname $pkgdir/usr/share/webapps/$pkgname
	cd $pkgdir/usr/share/webapps/$pkgname
	chmod 755 .
	chmod 755 bin/*
	chmod -R 777 db/
	chmod 777 run/
	chmod 666 run/*
}
