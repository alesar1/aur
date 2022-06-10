# Maintainer: Ray Del Rosario <michael@raydelrosario.com>
pkgname='infracost'
pkgver=0.10.2
pkgrel=1
pkgdesc='Infracost shows cloud cost estimates for Terraform. It lets DevOps, SRE and engineers see a cost breakdown and understand costs before making changes, either in the terminal or pull requests.'
url='https://github.com/infracost/infracost'
arch=('x86_64')
license=('Apache')
source=("https://github.com/infracost/infracost/releases/download/v${pkgver}/infracost-linux-amd64.tar.gz")
sha256sums=('b738c406fb7d87a3459270957628b46f36f3e33f2943a5fc4ab8d9781aa38301')
package() {
	install -Dm755 "$srcdir/infracost-linux-amd64" "${pkgdir}/usr/local/bin/${pkgname}"	
}
