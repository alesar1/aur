# Maintainer: MoeLava <me@lava.moe>
# Maintainer: InfinityGhost <infinityghostgit@gmail.com>
pkgname=opentabletdriver-git
_pkgname=OpenTabletDriver
_lpkgname=opentabletdriver
_spkgname=otd
pkgver=v0.5.0.r59.g6780778
pkgrel=2
pkgdesc="A cross-platform open source tablet driver"
arch=('x86_64')
url="https://github.com/InfinityGhost/OpenTabletDriver"
license=('GPL')
depends=('dotnet-runtime-5.0' 'dotnet-host>=5.0' 'gtk3' 'libevdev')
optdepends=('libxrandr: x11 display querying support' 'libx11')
makedepends=('git' 'dotnet-sdk-5.0')
provides=("opentabletdriver")
conflicts=("opentabletdriver")
install="notes.install"
source=('git+https://github.com/InfinityGhost/OpenTabletDriver'
        'git+https://github.com/InfinityGhost/OpenTabletDriver-udev'
        "$_spkgname"
        "$_spkgname-gui"
        "$_lpkgname.service"
        "$_pkgname.desktop"
        "notes.install")

sha256sums=('SKIP'
            'SKIP'
            '8a09d29e683aefcbf54e5fe891d5688f959d9399804f9c151f0e8f6e6a1ede1a'
            '20aac1584a8e08b5a9add1d02ce38e60ddfede615227df6f25c7422217df82b0'
            '419797d8915c32602fac3ed653dccc0573cd8ad633bacd925d9a82809da5fe4a'
            '4399359bf6107b612d10aaa06abb197db540b00a973cfec64c2b40d1fbbb2834'
            'ab3e758e9553e48cca60e6dfbca9ad710907e3c083d285d865b77d6788f266ea')

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "$srcdir/$_pkgname-udev/.modules"
    rmdir "$_pkgname"
    ln -s "$srcdir/$_pkgname" "$_pkgname"
}

build() {
    export DOTNET_CLI_TELEMETRY_OPTOUT=1
    export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true

    cd "$srcdir/$_pkgname"
    PREFIX=$(git describe --long --tags | sed 's/-.*//;s/v//')
    SUFFIX=$(git describe --long --tags | sed 's/^[^-]*-//;s/\([^-]*-g\)/r\1/;s/-/./g')

    dotnet publish        OpenTabletDriver.Daemon   \
        --configuration   Release                   \
        --framework       net5                      \
        --runtime         linux-x64                 \
        --self-contained  false                     \
        --output          "./$_pkgname/out"         \
        /p:VersionPrefix="$PREFIX"                  \
        /p:SuppressNETCoreSdkPreviewMessage=true    \
        /p:PublishTrimmed=false

    dotnet publish        OpenTabletDriver.Console  \
        --configuration   Release                   \
        --framework       net5                      \
        --runtime         linux-x64                 \
        --self-contained  false                     \
        --output          "./$_pkgname/out"         \
        --version-suffix  "$SUFFIX"                 \
        /p:VersionPrefix="$PREFIX"                  \
        /p:SuppressNETCoreSdkPreviewMessage=true    \
        /p:PublishTrimmed=false

    dotnet publish        OpenTabletDriver.UX.Gtk   \
        --configuration   Release                   \
        --framework       net5                      \
        --runtime         linux-x64                 \
        --self-contained  false                     \
        --output          "./$_pkgname/out"         \
        --version-suffix  "$SUFFIX"                 \
        /p:VersionPrefix="$PREFIX"                  \
        /p:SuppressNETCoreSdkPreviewMessage=true    \
        /p:PublishTrimmed=false

    cd "$srcdir/$_pkgname-udev"
    dotnet build          OpenTabletDriver.udev     \
        --configuration   Release                   \
        --framework       net5                      \
        --runtime         linux-x64                 \
        --output          "./$_pkgname.udev/out"    \
        /p:SuppressNETCoreSdkPreviewMessage=true

    dotnet "./$_pkgname.udev/out/$_pkgname.udev.dll" \
        "$srcdir/$_pkgname/$_pkgname/Configurations" \
        "90-$_lpkgname.rules" > /dev/null
}

package() {
    cd "$srcdir"

    install -do root "$pkgdir/usr/share/$_pkgname"

    cd "$srcdir/$_pkgname/$_pkgname/out"
    for binary in *.dll *.json *.pdb; do
        install -Dm 755 -o root "$binary" -t "$pkgdir/usr/share/$_pkgname"
    done
    cd "$srcdir"

    sed -i "s/OTD_VERSION/$pkgver/" "$_pkgname.desktop"

    install -Dm 644 -o root "$srcdir/$_pkgname/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
    install -Dm 644 -o root "$srcdir/$_pkgname-udev/90-$_lpkgname.rules" -t "$pkgdir/usr/lib/udev/rules.d"
    install -Dm 644 -o root "$srcdir/$_pkgname/$_pkgname.UX/Assets/$_spkgname.png" -t "$pkgdir/usr/share/pixmaps"
    cp -r "$srcdir/$_pkgname/$_pkgname/Configurations" "$pkgdir/usr/share/$_pkgname/"

    install -Dm 755 -o root "$_spkgname" -t "$pkgdir/usr/bin"
    install -Dm 755 -o root "$_spkgname-gui" -t "$pkgdir/usr/bin"
    install -Dm 644 -o root "$_lpkgname.service" -t "$pkgdir/usr/lib/systemd/user"
    install -Dm 644 -o root "$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
