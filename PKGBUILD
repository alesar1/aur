# Maintainer: zoe <chp321 [at] gmail.com>
# Contributor: Étienne Deparis <etienne [at] depar.is>

pkgname=galileo-dev
pkgver=1.0dev
pkgrel=1
pkgdesc='Utility to securely synchronize a Fitbit tracker with the Fitbit server. Development version, which supports synchronization without dongle, through bluetooth (experimental)'
license=('LGPL3')
url='https://bitbucket.org/benallard/galileo'
depends=('python-pyusb' 'python-requests' 'python-pydbus')
makedepends=('mercurial' 'python-setuptools')
source=("$pkgname::hg+https://bitbucket.org/benallard/galileo/src#branch=default")
md5sums=('SKIP')
arch=('any')
options=(!emptydirs)
backup=("etc/galileo/config")
install=galileo.install

prepare() {
  cd $srcdir/$pkgname

  sed -i 's/logging: verbose/logging: quiet # quiet is default/' galileorc.sample
  sed -i "26,35s/^\(.*\)$/\#\1/" galileorc.sample

  sed -i "s|/etc/galileorc|/etc/galileo/config|" contrib/galileo.service
}
 
package(){
  cd $srcdir/$pkgname
  python setup.py install --root=$pkgdir

  install -d -m755                  $pkgdir/etc/{udev/rules.d, $pkgname}
  install -d -m755                  $pkgdir/usr/share/{man/man1, man/man5, doc/$pkgname}

  install -D -m644 99-fitbit.rules         $pkgdir/etc/udev/rules.d/99-fitbit.rules
  install -D -m644 doc/galileo.1           $pkgdir/usr/share/man/man1/galileo.1
  install -D -m644 doc/galileorc.5         $pkgdir/usr/share/man/man5/galileorc.5
  install -D -m644 galileorc.sample        $pkgdir/etc/$pkgname/config
  install -D -m644 contrib/galileo.service $pkgdir/usr/lib/systemd/user/galileo.service

  install -D -m644 CHANGES          $pkgdir/usr/share/doc/$pkgname/CHANGES
  install -D -m644 README.txt       $pkgdir/usr/share/doc/$pkgname/README
}
