# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>
pkgname=omnisharp-roslyn-bin
pkgver=1.37.7
pkgrel=1
pkgdesc='OmniSharp server (STDIO) based on Roslyn workspaces'
arch=(x86_64)
url='https://github.com/OmniSharp/omnisharp-roslyn'
license=(MIT)
depends=(mono mono-msbuild mono-msbuild-sdkresolver)
provides=(${pkgname%-bin})
conflicts=(${pkgname%-bin})
source=(
	"omnisharp-mono-$pkgver.tar.gz::https://github.com/OmniSharp/omnisharp-roslyn/releases/download/v$pkgver/omnisharp-mono.tar.gz"
	'omnisharp.sh'
)
sha256sums=('d0aa05d0b9c5688cf291c2dc3255cc47e1fa7a1e29ff156a57438d5c1d1a4e26'
            '784a5643fde85bbec73f329b0bff1589451f7d976df3087e6667ad60a1768da9')

package() {
	install -Dm755 *.dll *.exe         -t"$pkgdir"/usr/lib/omnisharp
	install -Dm644 OmniSharp.deps.json -t"$pkgdir"/usr/lib/omnisharp
	install -Dm755 omnisharp.sh          "$pkgdir"/usr/bin/omnisharp
	install -Dm644 license.md            "$pkgdir"/usr/share/licenses/$pkgname/license.md
}
