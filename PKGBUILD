# Maintainer: oscarcl <oscar.cowderylack@gmail.com>
# Contributor: sixpindin <sixpindin@gmail.com>
pkgname=omnisharp-roslyn
pkgver=1.37.15
pkgrel=1
pkgdesc="OmniSharp server (STDIO) based on Roslyn workspaces"
arch=('x86_64')
url="https://github.com/OmniSharp/omnisharp-roslyn"
license=('MIT')
depends=('mono' 'mono-msbuild' 'mono-msbuild-sdkresolver')
source=("https://github.com/OmniSharp/$pkgname/archive/refs/tags/v$pkgver.tar.gz"
        'omnisharp')
sha256sums=('8313f9181cef0db8fb2d9b0fe396d98c26e5be146bf1e7188b79eeb13d01f883'
            '3b17bc4d6b66ead2d78803c089adc00c2b9ab14e9550517ca4de9b230f2248ab')

prepare() {
    cd "$srcdir/$pkgname-$pkgver"

    # /etc/os-release doesn't exist inside the build chroot, use
    # /usr/lib/os-release instead
    sed -i 's|/etc/os-release|/usr/lib/os-release|' scripts/platform.cake

    # normally the build sets the version from git, we don't have a git repo so
    # just override it manually
    sed -i "s/0.0.1-local/$pkgver/" scripts/common.cake
    sed -i "s/0.0.1.0/${pkgver%.*}.0.0/" scripts/common.cake
}

build() {
    cd "$srcdir/$pkgname-$pkgver"

    ./build.sh --target Quick --configuration Release
}

package() {
    cd "$srcdir/$pkgname-$pkgver/artifacts/publish/OmniSharp.Stdio.Driver/mono"

    install -d "$pkgdir/usr/share/$pkgname"
    install -Dm644 * "$pkgdir/usr/share/$pkgname"
    rm "$pkgdir/usr/share/$pkgname/license.md"

    install -Dm644 "license.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm755 "$srcdir/omnisharp" "$pkgdir/usr/bin/omnisharp"
}
