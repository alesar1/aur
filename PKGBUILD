# Maintainer: mzz2017 <mzz@tuta.io>

pkgname=v2raya-git
pkgver=20201217.r602.329a7e1
pkgrel=1
pkgdesc="A web GUI client of Project V which supports VMess, VLESS, SS, SSR, Trojan and Pingtunnel protocols"
arch=('x86_64')
url="https://github.com/v2rayA/v2rayA"
license=('GPL3')
depends=('git' 'glibc' 'v2ray')
makedepends=('go>=2:1.12.3-1' 'nodejs>=14' 'yarn' 'python2')
provides=('v2raya')
conflicts=('v2raya' 'v2raya-bin')
source=("$pkgname::git+$url")
sha512sums=('SKIP')

pkgver() {
    cd "$srcdir"/"$pkgname"
    local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
    local count=$(git rev-list --count HEAD)
    local commit=$(git rev-parse --short HEAD)
    echo "$date.r${count}.$commit"
}

build() {
    cd "$srcdir/$pkgname/gui"
    yarn config set registry https://registry.npm.taobao.org
    yarn config set sass_binary_site https://cdn.npm.taobao.org/dist/node-sass -g
    yarn --check-files
    yarn build

    cd "$srcdir/$pkgname/service"
    export GO111MODULE=on
    export GOPROXY=https://goproxy.io
    CGO_ENABLED=0 go build -ldflags '-X github.com/v2rayA/v2rayA/global.Version=unstable -s -w -extldflags "-static"' -o v2raya
}

package() {
    cd "${srcdir}"/"${pkgname}"/
    install -Dm 755 service/v2raya -t "${pkgdir}"/usr/bin/
    find web -type d -exec install -vd "${pkgdir}"/etc/v2raya/{} \;
    find web -type f -exec install -vm 644 {} "${pkgdir}"/etc/v2raya/{} \;
    install -dm 750 "${pkgdir}"/etc/v2raya/
    install -Dm 644 install/universal/v2raya.desktop -t "${pkgdir}"/usr/share/applications/
    install -Dm 644 install/universal/v2raya.service -t "${pkgdir}"/usr/lib/systemd/system/
    install -Dm 644 gui/public/img/icons/android-chrome-512x512.png "${pkgdir}"/usr/share/icons/hicolor/512x512/apps/v2raya.png
}
