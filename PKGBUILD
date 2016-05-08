# Contributor: Johannes Dewender  arch at JonyJD dot net
# Contributor: C. Dominik Bódi  dominik.bodi at gmx dot de
pkgname=debhelper-python
pkgver=3.5.1
pkgrel=1
_pkgname=python3-defaults
_pkgrel=3
_pkgname2=dh-python
_pkgver2=2.20151103
pkgdesc="debhelper scripts for Python 3: py3versions, python3.pm"
arch=('any')
url="http://packages.debian.org/sid/python3"
license=('custom:MIT')
groups=()
depends=('debhelper' 'python')
makedepends=()
provides=()
conflicts=()
replaces=()
options=()
source=(http://ftp.debian.org/debian/pool/main/p/$_pkgname/${_pkgname}_$pkgver-$_pkgrel.tar.gz
http://ftp.debian.org/debian/pool/main/d/$_pkgname2/${_pkgname2}_$_pkgver2.tar.xz)
sha256sums=('8d1284430b77775d4cea62a33b0685e0523b8dfa2ebcc092d382af5cb5b4f237'
            '4b7792423f7e22c1b4ccfafda162c4815de1cf3917465a23f85721496595f944')

build() {
  #cd "$srcdir/$_pkgname-$pkgver"
  cd "$srcdir/$_pkgname-debian"
  make
  # python3 works fine as binary
  #for file in {dh_python3,py3clean,py3compile,debian/py3versions.py}; do
  #  sed -i -e '1s|/usr/bin/python3$|/usr/bin/python|' $file
  #done

  #cd "$srcdir/$_pkgname2-$_pkgver2"
  cd "$srcdir/$_pkgname2"
  make
}

check() {
  #cd "$srcdir/$_pkgname-$pkgver"
  cd "$srcdir/$_pkgname-debian"
  sed -i -e 's|/usr/share/python3/debian_defaults|debian/debian_defaults|' \
    debpython/version.py
  make -k check_versions
  sed -i -e 's|debian/debian_defaults|/usr/share/python3/debian_defaults|' \
    debpython/version.py
}

package() {
  #cd "$srcdir/$_pkgname-$pkgver"
  cd "$srcdir/$_pkgname-debian"
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

  #cd "$srcdir/$_pkgname2-$_pkgver2"
  cd "$srcdir/$_pkgname2"
  make DESTDIR="$pkgdir/" PREFIX=/usr install

  # create symlinks to executables in order to make this look like in
  # debian
  ln -s -r $pkgdir/usr/share/dh-python/dh_pypy $pkgdir/usr/bin/dh_pypy
  ln -s -r $pkgdir/usr/share/dh-python/dh_python3 $pkgdir/usr/bin/dh_python3
  ln -s -r $pkgdir/usr/share/dh-python/pybuild $pkgdir/usr/bin/pybuild

  mkdir -p $pkgdir/usr/share/perl5/vendor_perl
  mv $pkgdir/usr/share/perl5/Debian $pkgdir/usr/share/perl5/vendor_perl/Debian
  # python2.pm is in debhelper-python2
  rm $pkgdir/usr/share/perl5/vendor_perl/Debian/Debhelper/Sequence/python2.pm
}

# vim:set ts=2 sw=2 et:
