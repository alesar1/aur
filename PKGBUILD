# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: craven@gmx.net 
# Contributor: realitygaps AT yahoo DOT com

pkgname=xstream
pkgver=1.4.11.1
pkgrel=1
pkgdesc="Simple java library to serialize objects to XML and back again."
arch=('any')
url="https://x-stream.github.io/"
license=('BSD')
depends=('java-environment=8')
makedepends=('maven')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/x-stream/xstream/archive/${pkgname^^}_${pkgver//./_}.tar.gz")
sha256sums=('eef0a6663e845960d1816fe020aad19f9da5216f99cd371ea7e13f6829261c8d')

build() {
  cd "${srcdir}/${pkgname}-${pkgname^^}_${pkgver//./_}"
  mvn clean package -Dmaven.test.skip=true -Dmaven.repo.local="${srcdir}/${pkgname}-${pkgname^^}_${pkgver//./_}" -Dmaven.compiler.source=1.8 -Dmaven.compiler.target=1.8
}

package() {
  mkdir -p ${pkgdir}/usr/share/java/${pkgname}/lib
  cd "${srcdir}/${pkgname}-${pkgname^^}_${pkgver//./_}/xstream-distribution"
  for i in target/libs/*.jar ; do
    install -m644 ${i} ${pkgdir}/usr/share/java/${pkgname}
  done

  for i in ../xstream/target/dependencies/*.jar ; do
    install -m644 ${i} ${pkgdir}/usr/share/java/${pkgname}/lib
  done

  install -Dm644 ${srcdir}/${pkgname}-${pkgname^^}_${pkgver//./_}/LICENSE.txt ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt
  install -Dm644 ${srcdir}/${pkgname}-${pkgname^^}_${pkgver//./_}/README.txt ${pkgdir}/usr/share/doc/${pkgname}/README.txt
}
