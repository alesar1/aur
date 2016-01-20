# Contributor: Manuel Serrano <Manuel.Serrano@inria.fr>
# Contributor: MCMic <come.bernigaud@laposte.net>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=hop-git
pkgver=3.0.0r26.c9c478b
pkgrel=1
pkgdesc="Software Development Kit for the Web"
arch=('i686' 'x86_64')
license=('GPL' 'LGPL')
depends=('bigloo-devel' 'libuv')
conflicts=('hop')
provides=('hop')
install=hop.install
url='http://hop.inria.fr'
source=("git+https://github.com/manuel-serrano/hop.git")
md5sums=('SKIP')
options=('!makeflags')

pkgver() {
  cd "$srcdir"/$_gitname
  printf "%sr%s.%s" "3.0.0" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd ${srcdir}/${pkgname%-git}
  ./configure --prefix=/usr --etcdir=/etc/hop --mandir=/usr/share/man
  make
  make doc
}

check() {
  cd ${srcdir}/${pkgname%-git}
  make test
}
  
package() {
  cd ${srcdir}/${pkgname%-git}
  make DESTDIR=${pkgdir} install
  install -Dm644 arch/archlinux/conf.d/hop.in $pkgdir/etc/conf.d/hop
  install -Dm755 arch/archlinux/rc.d/hop.in $pkgdir/etc/rc.d/hop
  install -Dm644 arch/archlinux/systemd/hop.service.in \
	  $pkgdir/usr/lib/systemd/system/hop.service
  install -Dm644 arch/archlinux/systemd/hop.socket.in \
	  $pkgdir/usr/lib/systemd/system/hop.socket

  install -Dm755 arch/archlinux/bin/hop.sh $pkgdir/usr/bin/hop.sh
  cd ${pkgdir}/usr/bin; rm hop; ln -s hop-3.0.0 hop
}
