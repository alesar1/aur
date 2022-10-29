# Maintainer: oscarcl <oscar.cowderylack@gmail.com>
# Contributor: sixpindin <sixpindin@gmail.com>
pkgname=omnisharp-roslyn
pkgver=1.39.2
pkgrel=3
pkgdesc="OmniSharp server (STDIO) based on Roslyn workspaces"
arch=('x86_64')
url="https://github.com/OmniSharp/omnisharp-roslyn"
license=('MIT')
depends=('dotnet-sdk')
source=("https://github.com/OmniSharp/$pkgname/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('3af01554bea0549ed3264dd60906d37fb224ea90b229fc6cb479ce954cac6ce4')

prepare() {
    cd "$srcdir/$pkgname-$pkgver"

    # normally the build sets the version from git, we don't have a git repo so
    # just override it manually
    sed -i "s/0.0.1-local/$pkgver/" scripts/common.cake
    sed -i "s/0.0.1.0/${pkgver%.*}.0.0/" scripts/common.cake

    # only built STDIO
    sed -i 's/"OmniSharp.Stdio.Driver",/"OmniSharp.Stdio.Driver"/;/OmniSharp.Http.Driver/d' build.json

    # only build x86_64-gnu
    sed -i '/linux-arm64/d;/linux-musl/d;' build.cake

    # use arch-packaged .NET version rather than forcing this version
    rm global.json

    # use absolute path to global dotnet exe
    sed -i "s|? \"dotnet\"|? \"$(command -v dotnet)\"|" scripts/common.cake

    export DOTNET_NOLOGO=1

    dotnet tool restore
}

build() {
    cd "$srcdir/$pkgname-$pkgver"

    dotnet cake --target PublishNet6Builds --configuration Release --exclusive --use-global-dotnet-sdk
}

package() {
    install -d "$pkgdir/usr/lib"
    cp -a "$srcdir/$pkgname-$pkgver/artifacts/publish/OmniSharp.Stdio.Driver/linux-x64/net6.0" "$pkgdir/usr/lib/$pkgname"

    install -d "$pkgdir/usr/share/licenses/$pkgname"
    mv "$pkgdir/usr/lib/$pkgname/license.md" "$pkgdir/usr/share/licenses/$pkgname"

    install -d "$pkgdir/usr/bin"
    ln -s "../lib/$pkgname/OmniSharp" "$pkgdir/usr/bin/omnisharp"
}
