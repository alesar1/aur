# Maintainer: K1412 <jonathan@opensides.be>
pkgname=fusiondirectory-webservice-shell
pkgver=1.0.9
pkgrel=1
pkgdesc="Webservice shell for FusionDirectory"
arch=("any")
url="http://fusiondirectory.org/"
license=("LGPL")
depends=("perl-term-readline-gnu" "perl-lwp-protocol-https")

source=("http://repos.fusiondirectory.org/sources/1.0/fusiondirectory/fusiondirectory-plugins-${pkgver}.tar.gz")

md5sums=('7c761f082278bfdcc5e9130e8fa4d3a0')

package() {
  cd ./fusiondirectory-plugins-${pkgver}

  # Go in plugin directory
  cd webservice/

  # Create directories
  mkdir -p $pkgdir/usr/bin/
  mkdir -p $pkgdir/usr/share/doc/$pkgname/
  mkdir -p $pkgdir/usr/share/man/man1/
  
  # Rights
  chmod +x ./contrib/bin/*

  # Gzip manpages
  gzip ./contrib/man/*

  # Copy files
  cp ./contrib/bin/* %{buildroot}/usr/bin/
  cp ./contrib/docs/* %{buildroot}/usr/share/doc/fusiondirectory-webservice-shell/
  cp ./contrib/man/* %{buildroot}/usr/share/man/man1/
}
