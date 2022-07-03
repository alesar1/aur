# Maintainer: Enmanuel Moreira <enmanuelmoreira@gmail.com>

pkgname=kubergrunt
pkgver=$PKGVER
pkgrel=2
pkgdesc="Kubergrunt is a standalone go binary with a collection of commands to fill in the gaps between Terraform, Helm, and Kubectl"
arch=('x86_64')
url="https://github.com/gruntwork-io/kubergrunt"
conflicts=('kubergrunt-bin')
provides=('kubergrunt')
optdepends=('terraform' 
            'kubectl' 
            'helm'
)
license=('Apache-2')
makedepends=('go>=1.18' 'git' 'gzip' 'tar' 'gcc')
source=(  "https://github.com/gruntwork-io/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('8bc05d05ffb61af96c00823ecc1eacc0fdd33de985bfc2501baf0ea829762367')

build() {
	cd "${pkgname}-${pkgver}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -buildvcs=false -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  BUILD_DATE=$(date '+%Y-%m-%d %H:%M:%S')
  go build -o build/${pkgname} -ldflags="-X 'main.VERSION=${pkgver}' -X 'main.buildDate=${BUILD_DATE}' -extldflags '-static'" ./cmd/
}

package() {
	cd "${srcdir}"/"${pkgname}-${pkgver}"
  install -Dm755 build/"${pkgname}" "${pkgdir}"/usr/bin/"${pkgname}"
  install -Dm644 README.md ${pkgdir}/usr/share/doc/${pkgname}/README.md
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
