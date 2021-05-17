# Maintainer: Luna Jernberg <droidbittin@gmail.com>


pkgname=microsoft-edge-beta-bin
_pkgname=microsoft-edge-beta
_pkgshortname=msedge-beta
pkgver=91.0.864.27
pkgrel=1
pkgdesc="A browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier"
arch=('x86_64')
url="https://www.microsoftedgeinsider.com/en-us/download"
license=('custom')
provides=('microsoft-edge-beta' 'edge-beta')
conflicts=('microsoft-edge-beta' 'edge-beta' 'edge-beta-bin' 'edge')
depends=('gtk3' 'libcups' 'nss' 'alsa-lib' 'libxtst' 'libdrm' 'mesa')
makedepends=('imagemagick')
optdepends=('libpipewire02: WebRTC desktop sharing under Wayland'
            'kdialog: for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libunity: for download progress on KDE'
            'ttf-liberation: fix fonts for some PDFs - CRBug #369991'
            'xdg-utils')
options=(!strip !zipman)
_channel=beta
source=("https://packages.microsoft.com/repos/edge/pool/main/m/microsoft-edge-beta/${_pkgname}_${pkgver}-1_amd64.deb"
        "Microsoft Standard Application License Terms - Standalone (free) Use Terms.pdf")
sha256sums=('b20022da4281c8f61edd1c8e51c9e5fac4549bb09ee125549568ad208bf5b25d'
            'edf2ed596eb068f168287fc76aa713ad5e0afb59f0a0a47a4f29c0c124ade15e')

package() {
	bsdtar -xf data.tar.xz -C "$pkgdir/"

	# suid sandbox
	chmod 4755 "${pkgdir}/opt/microsoft/${_pkgshortname}/msedge-sandbox"

	# 256 and 24 are proper colored icons
	for res in 128 64 48 32; do
		convert "${pkgdir}/opt/microsoft/${_pkgshortname}/product_logo_256_beta.png" \
			-resize ${res}x${res} \
			"${pkgdir}/opt/microsoft/${_pkgshortname}/product_logo_${res}_beta.png"
	done
	for res in 22 16; do
		convert "${pkgdir}/opt/microsoft/${_pkgshortname}/product_logo_24_beta.png" \
			-resize ${res}x${res} \
			"${pkgdir}/opt/microsoft/${_pkgshortname}/product_logo_${res}_beta.png"
	done

	# install icons
	for res in 16 22 24 32 48 64 128 256; do
		install -Dm644 "${pkgdir}/opt/microsoft/${_pkgshortname}/product_logo_${res}_beta.png" \
			"${pkgdir}/usr/share/icons/hicolor/${res}x${res}/apps/${_pkgname}.png"
	done
       # User flag aware launcher
       install -m755 microsoft-edge-dev.sh "${pkgdir}/usr/bin/microsoft-edge-dev"
	

	# License
	install -Dm644 'Microsoft Standard Application License Terms - Standalone (free) Use Terms.pdf' "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE.pdf"
	rm -r "${pkgdir}/etc/cron.daily/" "${pkgdir}/opt/microsoft/${_pkgshortname}/cron/"
	# Globbing seems not to work inside double parenthesis
	rm "${pkgdir}/opt/microsoft/${_pkgshortname}"/product_logo_*.png
}
