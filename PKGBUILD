# Contributor: Johannes Dewender  arch at JonyJD dot net
pkgname=debhelper-python
_pkgname=python3-defaults
_pkgname2=dh-python
pkgver=3.4.2
_pkgver=1.20141111
pkgrel=4
_pkgrel=2
pkgdesc="debhelper scripts for Python 3: py3versions, python3.pm"
arch=('any')
url="http://packages.debian.org/sid/python3"
license=('custom:MIT')
groups=()
depends=('debhelper' 'python')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=(http://ftp.debian.org/debian/pool/main/p/$_pkgname/${_pkgname}_$pkgver-$_pkgrel.tar.gz
http://ftp.debian.org/debian/pool/main/d/$_pkgname2/${_pkgname2}_$_pkgver.orig.tar.xz)
md5sums=('085af4790d392ee6cba83e65337457b4'
         '5465c002a76008194172a045b63a8c2c')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  make
  # python3 works fine as binary
  #for file in {dh_python3,py3clean,py3compile,debian/py3versions.py}; do
  #  sed -i -e '1s|/usr/bin/python3$|/usr/bin/python|' $file
  #done

  cd "$srcdir/$_pkgname2-$_pkgver"
  make
}

check() {
  cd "$srcdir/$_pkgname-$pkgver"
  sed -i -e 's|/usr/share/python3/debian_defaults|debian/debian_defaults|' \
    debpython/version.py
  make -k check_versions
  sed -i -e 's|debian/debian_defaults|/usr/share/python3/debian_defaults|' \
    debpython/version.py
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  make DESTDIR="$pkgdir/" PREFIX=/usr install

  mkdir -p $pkgdir/usr/share/python3
  install -m 755 debian/py3versions.py $pkgdir/usr/share/python3/
  ln -s -r $pkgdir/usr/share/python3/py3versions.py $pkgdir/usr/bin/py3versions 
  install -m 755 debian/debian_defaults $pkgdir/usr/share/python3/
  gzip -f debian/py3versions.1
  mkdir -p $pkgdir/usr/share/man/man1
  install -m 644 debian/py3versions.1.gz $pkgdir/usr/share/man/man1/

  mkdir -p $pkgdir/usr/share/licenses/$pkgname/
  install -D -m 644 debian/copyright $pkgdir/usr/share/licenses/$pkgname/

  cd "$srcdir/$_pkgname2-$_pkgver"
  make DESTDIR="$pkgdir/" PREFIX=/usr install
  mkdir -p $pkgdir/usr/share/perl5/vendor_perl
  mv $pkgdir/usr/share/perl5/Debian $pkgdir/usr/share/perl5/vendor_perl/Debian
  # python2.pm is in debhelper-python2
  rm $pkgdir/usr/share/perl5/vendor_perl/Debian/Debhelper/Sequence/python2.pm
}

# vim:set ts=2 sw=2 et:
