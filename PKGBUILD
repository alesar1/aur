# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Daniel Maslowski <info@orangecms.org>

pkgname=minio
pkgver=2017.04.25
_pkgver="${pkgver//./-}T01-27-49Z"
pkgrel=1
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
sha512sums=('99678e7648100f8032c395c3ffe700f982709e7b3213ae59fdee24734dc4288f8435b1f75f9d68726e9862bc77dd7721fd5bdd764efc1cacb20bc97b5186444a'
            '630a5d109409074b67be71b663a43ad09104121cca3637bb0542df19e375023bff7d7e2cbf39e52cc3cd060d41c363a90bd4ff7734aed1a5ca43a600f6d6d275'
            '36dbd6b9d27d66b3e7dfb4f6b20fc1939dc42286b5c0ffc399760e5bebffee08548834a0a780d45b815c7c78ca6c738bf0da61ec734131fcc704e65874e04486')

build() {
  export GOPATH="${srcdir}/go"
  mkdir -p "${GOPATH}/src/github.com/minio"
  mv "${srcdir}/minio-RELEASE.${_pkgver}" "${GOPATH}/src/github.com/minio/minio"
  cd "${GOPATH}/src/github.com/minio/minio"
  go build
}

package() {
  install -dm750 "${pkgdir}/srv/minio"
  
  export GOPATH="${srcdir}/go"
  cd "${GOPATH}/src/github.com/minio/minio"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/minio.conf" "${pkgdir}/etc/minio/${pkgname}.conf"
  install -Dm644 "${srcdir}/minio.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}
