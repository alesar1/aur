# Maintainer: PAPPY <pappy _AT_ a s c e l i o n _DOT_ com>

pkgname=cloudfoundry6-cli
pkgver=6.51.0
pkgrel=1
pkgdesc="The official command line client for Cloud Foundry (stuck to version 6)"
arch=(x86_64)
url="https://github.com/cloudfoundry/cli"
license=('Apache')
provides=(cf)
conflicts=(cloudfoundry-cli)
options=('!emptydirs' '!strip')

source=(
	"cf-cli-$pkgver-amd64.tar.gz::https://cli.run.pivotal.io/stable?release=linux64-binary&version=$pkgver&source=github-rel"
	"cf-cli-$pkgver-completion::https://raw.githubusercontent.com/cloudfoundry/cli/v$pkgver/ci/installers/completion/cf"
)

sha256sums=('cf49127bf52c139e608d76424c77aa0123291897ac6d121a432bdad4ba7a4b58'
            'f3f05a2414075c00b101b05f73cf260b9eec9966659adf2957c1b2937bd4c48e')

package() {
	cd $srcdir

	install -Dm755 cf $pkgdir/usr/bin/cf
	install -Dm644 cf-cli-$pkgver-completion $pkgdir/usr/share/bash-completion/completions/cf

	install -dm755 $pkgdir/usr/share/doc/cf-cli

	install LICENSE $pkgdir/usr/share/doc/cf-cli/LICENSE
	install NOTICE $pkgdir/usr/share/doc/cf-cli/NOTICE
}

