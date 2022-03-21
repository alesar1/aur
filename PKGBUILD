# Maintainer: oscarcl <oscar.cowderylack@gmail.com>
# Contributor: sixpindin <sixpindin@gmail.com>
pkgname=omnisharp-roslyn
pkgver=1.38.1
pkgrel=2
pkgdesc="OmniSharp server (STDIO) based on Roslyn workspaces"
arch=('x86_64')
url="https://github.com/OmniSharp/omnisharp-roslyn"
license=('MIT')
depends=('dotnet-runtime')
makedepends=('dotnet-sdk' 'mono' 'mono-msbuild')
source=("https://github.com/OmniSharp/$pkgname/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('c98735c29e5d45c1bf41496fae3b2de3f4071c98af7c1ec5a720fc8f046499fa')

prepare() {
    cd "$srcdir/$pkgname-$pkgver"

    # /etc/os-release doesn't exist inside the build chroot, use
    # /usr/lib/os-release instead
    sed -i 's|/etc/os-release|/usr/lib/os-release|' scripts/platform.cake

    # normally the build sets the version from git, we don't have a git repo so
    # just override it manually
    sed -i "s/0.0.1-local/$pkgver/" scripts/common.cake
    sed -i "s/0.0.1.0/${pkgver%.*}.0.0/" scripts/common.cake

    # only built STDIO
    sed -i 's/"OmniSharp.Stdio.Driver",/"OmniSharp.Stdio.Driver"/;/OmniSharp.Http.Driver/d' build.json

    # only build x86_64
    sed -i '/linux-arm64/d' build.cake
}

build() {
    cd "$srcdir/$pkgname-$pkgver"

    ./build.sh --target PublishNet6Builds --configuration Release
}

package() {
    install -d "$pkgdir/usr/lib"
    cp -a "$srcdir/$pkgname-$pkgver/artifacts/publish/OmniSharp.Stdio.Driver/linux-x64/net6.0" "$pkgdir/usr/lib/$pkgname"

    install -d "$pkgdir/usr/share/licenses/$pkgname"
    mv "$pkgdir/usr/lib/$pkgname/license.md" "$pkgdir/usr/share/licenses/$pkgname"

    install -d "$pkgdir/usr/bin"
    ln -s "../lib/$pkgname/OmniSharp" "$pkgdir/usr/bin/omnisharp"
}
