# Maintainer: Kamran Mackey <kamranm1200@gmail.com>

_pkgbase=git
pkgbase=git-git
pkgname=('git-git')
pkgver=v2.6.3.r469.ge5da865
pkgrel=1
pkgdesc="A fast distributed version control system"
arch=('i686' 'x86_64')
url='http://git-scm.com/'
license=('GPL2')
depends=('git' 'asciidoc' 'gettext' 'openssl' 'expat' 'xmlto' 'curl' 'zlib' 'perl')
conflicts=('git')
provides=('git')
install=git-git.install
source=(git://github.com/git/git.git)
md5sums=('SKIP'
         'SKIP'
         'SKIP')
_gitname=git

pkgver() {
  cd "$_gitname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${_pkgbase}"
}

build() {
 cd "$_gitname"
 make clean
 make configure
 ./configure prefix=/usr
 make prefix=/usr \
    CFLAGS="$CFLAGS" LDFLAGS="$LDFLAGS" \
    USE_LIBPCRE=1 \
    NO_CROSS_DIRECTORY_HARDLINKS=1 \
    MAN_BOLD_LITERAL=1 \
    all doc
}

package() {
 cd "$_gitname"
 make DESTDIR="$pkgdir" install install-doc

  # git-daemon via systemd socket activation
  install -D -m 644 "$srcdir"/git-daemon@.service "$pkgdir"/usr/lib/systemd/system/git-daemon@.service
  install -D -m 644 "$srcdir"/git-daemon.socket "$pkgdir"/usr/lib/systemd/system/git-daemon.socket
}
