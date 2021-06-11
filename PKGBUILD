# Maintainer: Zacharias Knudsen <zachasme@gmail.com>

pkgname=aws-iam-authenticator-bin
pkgver=0.5.3
pkgrel=1
pkgdesc="A tool to use AWS IAM credentials to authenticate to a Kubernetes cluster"
arch=('x86_64')
url="https://github.com/kubernetes-sigs/${pkgname%-bin}"
license=('Apache')
provides=("${pkgname%-bin}")
source=("https://github.com/kubernetes-sigs/${pkgname%-bin}/releases/download/v${pkgver}/${pkgname%-bin}_${pkgver}_linux_amd64")
sha256sums=("20f4d8ece0f867c38b917ebe37dff934a31aabe385e26986183b14d72c70c137")

package() {
	install -D --mode 755 \
		"${srcdir}/${pkgname%-bin}_${pkgver}_linux_amd64" \
		"${pkgdir}/usr/bin/${pkgname%-bin}"
}
