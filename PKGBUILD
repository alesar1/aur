# Maintainer: Frank Vanderham <twelve_dot_eighty_at_gmail_dot_com>
pkgname=pam_mount-git
pkgver=2.16
pkgrel=1
pkgdesc="A PAM module that can mount volumes for a user session"
arch=('x86_64')
url="http://pam-mount.sourceforge.net/"
license=('GPL')
depends=('pcre' 'util-linux' 'libhx' 'libxml2' 'openssl' 'cryptsetup')
makedepends=('git') # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("pam_mount")
conflicts=("pam_mount")
backup=('etc/security/pam_mount.conf.xml')
options=(!emptydirs)
source=("${pkgname}::git+git://git.code.sf.net/p/pam-mount/pam-mount")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-VCS}"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
  cd -- "$srcdir/$pkgname"
  aclocal
  libtoolize
  autoreconf --install
  automake --add-missing
  autoreconf
  ./configure \
	--prefix=/usr \
	--with-ssbindir=/usr/bin \
	--sbindir=/usr/bin \
	--with-slibdir=/usr/lib \
	--sysconfdir=/etc \
	--localstatedir=/var
  make
}

package() {
  cd -- "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" install
}

