# Maintainer: Rowan Decker <rdecker [at] scu [dot] edu>

_pkgbase=monero
pkgname=monero-gui-bin
pkgver=0.11.1.0
pkgrel=2
pkgdesc="Monero: the secure, private, untraceable currency - release version (Helium Hydra, Point Release 1. Includes daemon, wallet and miner)"
arch=("x86_64" "i686")
conflicts=("${_pkgbase}")
url="https://getmonero.org/"
license=("BSD")
depends=("qt5-declarative" "qt5-svg")
provides=("monerod=${pkgver}"
          "monero-blockchain-export=${pkgver}"
          "monero-blockchain-import=${pkgver}"
          "monero-utils-deserialize=${pkgver}"
          "monero-wallet-cli=${pkgver}"
          "monero-wallet-rpc=${pkgver}"
)

source=("${pkgname}-${pkgver}.tar.bz2::https://github.com/monero-project/monero-gui/releases/download/v${pkgver}/monero-gui-linux-x64-v${pkgver}.tar.bz2"
    "monero-wallet-gui"
    "monero-wallet-gui.desktop"
)

sha256sums=("e18a13f39a3b4aa87c9afdd9c87dfc087ed4940d99cf18c16ec59037e5f68eaf"
    "8b69aac7caae305676ccebc6dbfa803c9aadf8b82d2ca1ecf2d8302a0d79cfc9"
    "1a88e0dd59687fc19f4ca84b43311c506e04c1723cb9972faf427942723c73d2"
)

if [ "$CARCH" = 'i686' ]; then
    source[0]="${pkgname}-${pkgver}.tar.bz2::https://github.com/monero-project/monero-gui/releases/download/v${pkgver}/monero-gui-linux-x86-v${pkgver}.tar.bz2"
    sha256sums[0]="5df6ebeab728a653eaf64352bc60d8dddbf4d6a47a422856015d7e93ce5dc411"
fi

package() {
    cd "$srcdir"

    # Copy precompiled package
    install -dm755 "${pkgname//-bin/}-v${pkgver//_/-}" "${pkgdir}/usr/share/monero-gui/"
    cp -r "${pkgname//-bin/}-v${pkgver//_/-}/." "${pkgdir}/usr/share/monero-gui/"
    
    # Fix permissions
    chmod -R +rX "${pkgdir}/usr/share/monero-gui"
    chmod +x "${pkgdir}/usr/share/monero-gui/monero-wallet-gui"
    chmod +x "${pkgdir}/usr/share/monero-gui/start-gui.sh"

    # Wallet launcher script
    install -Dm755 "monero-wallet-gui" "${pkgdir}/usr/bin/monero-wallet-gui"

    # Install icons
    for i in 16x16 24x24 32x32 48x48 64x64 96x96 128x128 256x256; do
        curl "https://raw.githubusercontent.com/monero-project/monero-gui/master/images/appicons/$i.png" --silent --create-dirs -o "${srcdir}/icons/${i}/monero-wallet-gui.png"
        install -Dm644 "${srcdir}/icons/${i}/monero-wallet-gui.png" "${pkgdir}/usr/share/icons/hicolor/${i}/apps/monero-wallet-gui.png"
    done

    # Install desktop file
    desktop-file-install -m 644 --dir="${pkgdir}/usr/share/applications/" "${srcdir}/../monero-wallet-gui.desktop"

    # Binary symlinks
    ln -sf /usr/share/monero-gui/monerod "${pkgdir}/usr/bin/monerod"
    ln -sf /usr/share/monero-gui/monero-blockchain-export "${pkgdir}/usr/bin/monero-blockchain-export"
    ln -sf /usr/share/monero-gui/monero-blockchain-import "${pkgdir}/usr/bin/monero-blockchain-import"
    ln -sf /usr/share/monero-gui/monero-utils-deserialize "${pkgdir}/usr/bin/monero-utils-deserialize"
    ln -sf /usr/share/monero-gui/monero-wallet-cli "${pkgdir}/usr/bin/monero-wallet-cli"
    ln -sf /usr/share/monero-gui/monero-wallet-rpc "${pkgdir}/usr/bin/monero-wallet-rpc"
}
