# Maintainer: Sebastian 'gonX' Jensen <gonx@gonx.dk>
# Contibutor: MoeLava <me@lava.moe>
# Contibutor: InfinityGhost <infinityghostgit@gmail.com>
pkgname=opentabletdriver-git
_pkgname=OpenTabletDriver
_lpkgname=opentabletdriver
_spkgname=otd
pkgver=v0.5.3.1.r675.g35ae3e65
pkgrel=8
pkgdesc="A cross-platform open source tablet driver"
arch=('x86_64')
url="https://github.com/OpenTabletDriver/OpenTabletDriver"
license=('LGPL3')
depends=('dotnet-runtime>=5.0' 'dotnet-host>=5.0' 'gtk3' 'libevdev')
optdepends=('libxrandr: x11 display querying support' 'libx11')
makedepends=('git' 'dotnet-sdk>=5.0')
provides=("opentabletdriver")
conflicts=("opentabletdriver")
install="notes.install"
source=('git+https://github.com/OpenTabletDriver/OpenTabletDriver'
        "$_spkgname"
        "$_spkgname-gui"
        "$_lpkgname.service"
        "$_pkgname.desktop"
        "notes.install")

sha256sums=('SKIP'
            '8a09d29e683aefcbf54e5fe891d5688f959d9399804f9c151f0e8f6e6a1ede1a'
            '20aac1584a8e08b5a9add1d02ce38e60ddfede615227df6f25c7422217df82b0'
            '88f7d9ae1e9402cfbf9266ddf0de642195b64de13a3d5ce6f93460ba035cf7f2'
            '4399359bf6107b612d10aaa06abb197db540b00a973cfec64c2b40d1fbbb2834'
            'f1f88e4a57b4caf503192a773fdbb88531b51499bfb9b350421d7e92795736fd')

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    export DOTNET_CLI_TELEMETRY_OPTOUT=1
    export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true

    cd "$srcdir/$_pkgname"
    PREFIX=$(git describe --long --tags | sed 's/-.*//;s/v//')
    SUFFIX=$(git describe --long --tags | sed 's/^[^-]*-//;s/\([^-]*-g\)/r\1/;s/-/./g')

    if check_option "strip" y; then
        EXTRA_OPTIONS="/p:DebugType=None /p:DebugSymbols=false"
    fi

    ./build.sh linux-x64 \
        --version-suffix "$SUFFIX"                  \
        /p:VersionPrefix="$PREFIX"                  \
        $EXTRA_OPTIONS

    dotnet build          OpenTabletDriver.Tools.udev   \
        --configuration   Release                       \
        --framework       net5.0                        \
        --runtime         linux-x64                     \
        --output          "./$_pkgname/out-udev"        \
        /p:SuppressNETCoreSdkPreviewMessage=true

    dotnet "./$_pkgname/out-udev/$_pkgname.Tools.udev.dll"          \
        "$srcdir/$_pkgname/$_pkgname.Configurations/Configurations" \
        "bin/99-$_lpkgname.rules" > /dev/null
}

package() {
    cd "$srcdir"

    install -do root "$pkgdir/usr/share/$_pkgname"

    shopt -s nullglob
    cd "$srcdir/$_pkgname/bin"
    for binary in *.dll *.json *.pdb; do
        install -Dm 755 -o root "$binary" -t "$pkgdir/usr/share/$_pkgname"
    done
    cd "$srcdir"

    sed -i "s/OTD_VERSION/$pkgver/" "$_pkgname.desktop"

    install -Dm 644 -o root "$srcdir/$_pkgname/bin/99-$_lpkgname.rules" -t "$pkgdir/usr/lib/udev/rules.d"
    install -Dm 644 -o root "$srcdir/$_pkgname/$_pkgname.UX/Assets/$_spkgname.png" -t "$pkgdir/usr/share/pixmaps"

    install -Dm 755 -o root "$_spkgname" -t "$pkgdir/usr/bin"
    install -Dm 755 -o root "$_spkgname-gui" -t "$pkgdir/usr/bin"
    install -Dm 644 -o root "$_lpkgname.service" -t "$pkgdir/usr/lib/systemd/user"
    install -Dm 644 -o root "$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
