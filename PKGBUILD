# Maintainer: Max Furman <mx.furman@gmail.com>
# Maintainer: Sebastian Tiedtke <sebastiantiedtke@gmail.com>
# Maintainer: Nazar Mishturak <nazarmx@gmail.com>
_binname=step-cli
pkgname=$_binname-bin
pkgver=0.15.2
pkgrel=1
pkgdesc="A zero trust swiss army knife for working with X509, OAuth, JWT, OATH OTP, etc."
arch=('x86_64' 'aarch64')
url="https://smallstep.com/cli"
license=('Apache')

source=("https://github.com/smallstep/cli/raw/v${pkgver}/autocomplete/bash_autocomplete"
	"https://github.com/smallstep/cli/raw/v${pkgver}/autocomplete/zsh_autocomplete")
source_aarch64=("https://github.com/smallstep/cli/releases/download/v${pkgver}/step_linux_${pkgver}_arm64.tar.gz")
source_x86_64=("https://github.com/smallstep/cli/releases/download/v${pkgver}/step_linux_${pkgver}_amd64.tar.gz")

sha256sums=('add3e078e394e265f6b6a3bf12af81cc7897410ae5e6a0d4ee7714a5b856a7be'
            '3e65c7f99484497e39d20eed3e4ceb4006e8db62dc9987f83a789bb575636e18')
sha256sums_aarch64=("77593f43be738ab9186256a218b383163c611bb2bc7b21f4c815dffc09d2ffe1")
sha256sums_x86_64=("385041af30080f28baac298f12c3b81f7f7ee21f60878a1caea4aa532329deda")

prepare() {
	sed -i "s/step/${_binname}/g" "zsh_autocomplete"
}

package() {
	install -Dm755 "step_$pkgver/bin/step" "$pkgdir/usr/bin/$_binname"
	install -Dm644 "step_$pkgver/README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
	install -Dm644 "bash_autocomplete" "$pkgdir/usr/share/bash-completion/completions/$_binname"
	install -Dm644 "zsh_autocomplete" "$pkgdir/usr/share/zsh/site-functions/_${_binname}"
}
