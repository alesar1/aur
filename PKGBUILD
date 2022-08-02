# Maintainer: Namkhai B. <echo hc.9mobkrof@em | rev>

pkgname=gyr-bin
pkgver=0.1.1
pkgrel=1
pkgdesc='Blazing fast TUI launcher for GNU/Linux and *BSD (prebuilt binary version)'
arch=('x86_64' 'aarch64')
url="https://sr.ht/~forkbomb9/gyr"
license=('BSD-2-Clause')
provides=('gyr')
conflicts=('gyr')
source_x86_64=("https://git.sr.ht/~forkbomb9/gyr/refs/download/v${pkgver}/gyr-v${pkgver}-x86_64-unknown-linux-musl")
sha256sums_x86_64=('94bf24c3dd0b7f3d6c31a0b53fe446868edd45f2f9de5000dbb1b720a6d35cc7')
b2sums_x86_64=('620c4ccef50dc8a25b57382c7a3b7baf25718030a24a2fb091f434407244eb86b29c0e459b98220f5fa1cfb29cfabec0450fba9675555d8da7aa01ac3f956d5b')
source_aarch64=("https://git.sr.ht/~forkbomb9/gyr/refs/download/v${pkgver}/gyr-v${pkgver}-aarch64-unknown-linux-musl")
sha256sums_aarch64=('5d9af921cbbaac69f8d0106db54437e4c1bb942604dc6a87e69380bb90fc0f9b')
b2sums_aarch64=('858715c1923ab059ceac647bddc4af7adc5cb7ff3082305413e8884d7c2f545099fb75804a5079a3de0003a98e6c936450a2a07a71cc3cc855d38a7f44544c78')

package() {
    install -Dm755 "gyr-v${pkgver}-${CARCH}-unknown-linux-musl" \
        "${pkgdir}/usr/bin/gyr"
}
