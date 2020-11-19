# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=go-dsp-guitar
pkgver=1.6.1
pkgrel=1
pkgdesc="A cross-platform multichannel multi-effects processor for electric guitars and other instruments"
arch=('x86_64')
url='https://github.com/andrepxx/go-dsp-guitar'
license=('Apache')
depends=('jack' 'glibc')
makedepends=('go' 'openssl')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/andrepxx/go-dsp-guitar/archive/v${pkgver}.tar.gz")
sha256sums=('3448896394fc12a04f831205618bdabd0f267e80dd6c0a8a85e7f7ce13eb2ef2')

prepare() {
  cd "${pkgname}-${pkgver}"
  mkdir -p build/
  mkdir -p keys
  openssl genrsa -out keys/private.pem 4096
  openssl req -new -x509 -days 365 -sha512 -key keys/private.pem -out keys/public.pem -subj "/C=DE/ST=Berlin/L=Berlin/O=None/OU=None/CN=localhost"
}

build() {
  cd "${pkgname}-${pkgver}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  export GOPATH="${srcdir}"/go
  export PATH=$PATH:$GOPATH/bin
  go get -d -v
  go build -o build ./...
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 build/${pkgname}-${pkgver} "${pkgdir}/opt/${pkgname}/go-dsp-guitar"
  cp -R config "${pkgdir}/opt/${pkgname}/"
  cp -R ir "${pkgdir}/opt/${pkgname}/"
  cp -R keys "${pkgdir}/opt/${pkgname}/"
  cp -R webroot "${pkgdir}/opt/${pkgname}/"
  install -d "${pkgdir}/usr/bin/"
  ln -s /opt/${pkgname}/${pkgname} "${pkgdir}/usr/bin/${pkgname}"
  chmod o+r "${pkgdir}/opt/go-dsp-guitar/keys/private.pem"
}
