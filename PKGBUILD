# Maintainer: DrRac27 <drrac27 at riseup dot net>
# Contributor: Jake <aur@ja-ke.tech>
# Contributor: Crotok <crotok [at] mailbox [dot] org>

pkgname=monero-bin
pkgver=0.12.3.0
pkgrel=1
pkgdesc="Monero: the secure, private, untraceable currency - CLI release version (includes daemon, wallet and miner)"
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
conflicts=("${pkgname%-bin}")
url="https://getmonero.org/"
license=("custom:Cryptonote")
backup=("etc/monerod.conf")
provides=("monerod=${pkgver}"
          "monero-blockchain-export=${pkgver}"
          "monero-blockchain-import=${pkgver}"
          "monero-utils-deserialize=${pkgver}"
          "monero-wallet-cli=${pkgver}"
          "monero-wallet-rpc=${pkgver}"
)
source_x86_64=("https://downloads.getmonero.org/cli/monero-linux-x64-v${pkgver}.tar.bz2")
source_i686=("https://downloads.getmonero.org/cli/monero-linux-x86-v${pkgver}.tar.bz2")
source_armv7h=("https://downloads.getmonero.org/cli/monero-linux-armv7-v${pkgver}.tar.bz2")
source_aarch64=("https://downloads.getmonero.org/cli/monero-linux-armv8-v${pkgver}.tar.bz2")
source=("monerod.conf"
        "monerod.service"
		"LICENSE"
)
sha256sums=('829445fe9acc00681f94f7b9ca6ce39713e377970b0a3d6f88c37991e1aa61b2'
            '0b66160a5448dedd8e84c38ba2243187217b214b1552f504b05de120b671f121'
			'0e24d8f4b8758ff33612a17f3bb72a69497b74b32d12bbe5d647d954fcef59ad')
sha256sums_x86_64=('72fe937aa2832a0079767914c27671436768ff3c486597c3353a8567d9547487')
sha256sums_i686=('41d68f66a43098754de0d2ead0eaeb125fc7eb05ecf3eb6a48c96ce6874052f3')
sha256sums_armv7h=('839bddb01214acb8f7bc12181b206e1e8d99314337addef7ba850b15c32dc685')
sha256sums_aarch64=('a6e994dc9fcec7259b656752a6fc0f9686bad47da9deec0f50398718cd9b9be8')


package() {
    # Binary file
    install -Dm755 "${srcdir}/monero-v${pkgver}/monerod" "${pkgdir}/usr/bin/monerod"
    install -Dm755 "${srcdir}/monero-v${pkgver}/monero-blockchain-export" "${pkgdir}/usr/bin/monero-blockchain-export"
    install -Dm755 "${srcdir}/monero-v${pkgver}/monero-blockchain-import" "${pkgdir}/usr/bin/monero-blockchain-import"
    install -Dm755 "${srcdir}/monero-v${pkgver}/monero-wallet-cli" "${pkgdir}/usr/bin/monero-wallet-cli"
    install -Dm755 "${srcdir}/monero-v${pkgver}/monero-wallet-rpc" "${pkgdir}/usr/bin/monero-wallet-rpc"

    # Configuration and service file
    install -Dm644 "${srcdir}/monerod.conf" "${pkgdir}/etc/monerod.conf"
    install -Dm644 "${srcdir}/monerod.service" "${pkgdir}/usr/lib/systemd/system/monerod.service"

	# License file
	install -Dm 0644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/monero/LICENSE"
}
