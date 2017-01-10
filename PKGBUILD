# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Daniel Maslowski <info@orangecms.org>

pkgname=minio
pkgver=2016.12.13
_pkgver='2016-12-13T17-19-42Z'
pkgrel=3
pkgdesc='Object storage server compatible with Amazon S3'
arch=('x86_64' 'i686')
url='https://minio.io'
license=('APACHE')
makedepends=('go')
depends=('glibc')
options=('!strip')
install=minio.install
source=(https://github.com/minio/minio/archive/RELEASE.${_pkgver}.tar.gz
        minio.conf
        minio.service)
sha512sums=('34c376f36e90c88ebf9d08caadc7834ac45a413be808614e8c407657c322a2cb8d09696af76a010724265798bf146a24855d817072622af89977d4063a7bcd37'
            '630a5d109409074b67be71b663a43ad09104121cca3637bb0542df19e375023bff7d7e2cbf39e52cc3cd060d41c363a90bd4ff7734aed1a5ca43a600f6d6d275'
            '36dbd6b9d27d66b3e7dfb4f6b20fc1939dc42286b5c0ffc399760e5bebffee08548834a0a780d45b815c7c78ca6c738bf0da61ec734131fcc704e65874e04486')

build() {
  export GOPATH=${srcdir}/go
  mkdir -p ${GOPATH}/src/github.com/minio
  mv ${srcdir}/minio-RELEASE.${_pkgver} ${GOPATH}/src/github.com/minio/minio
  cd ${GOPATH}/src/github.com/minio/minio
  go build
}

package() {
  install -dm750 ${pkgdir}/srv/minio
  
  export GOPATH=${srcdir}/go
  cd ${GOPATH}/src/github.com/minio/minio
  install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
  install -Dm644 ${srcdir}/minio.conf ${pkgdir}/etc/minio/${pkgname}.conf
  install -Dm644 ${srcdir}/minio.service ${pkgdir}/usr/lib/systemd/system/${pkgname}.service
}
