# Maintainer: Brian Li <brian14708@gmail.com>
# Maintainer: Denys Zariaiev <denys.zariaiev@gmail.com>

pkgname=chitubox-free-bin
pkgver=1.9.4

pkgrel=2
pkgdesc="All-in-one SLA/DLP/LCD Slicer"

makedepends=('xdg-user-dirs')

url="https://www.chitubox.com/download.html"
arch=("x86_64")
license=("Commercial")

DOWNLOADS_DIR=`xdg-user-dir DOWNLOAD`
ARCHIVE_NAME="CHITUBOX_V${pkgver}.tar.gz"
DIR_NAME="CHITUBOX V${pkgver}"

if [ ! -f ${PWD}/$ARCHIVE_NAME ]; then
	if [ -f $DOWNLOADS_DIR/$ARCHIVE_NAME ]; then
		ln -sfn $DOWNLOADS_DIR/$ARCHIVE_NAME ${PWD}
	else
		msg2 ""
		msg2 "Please download the archive with ChiTuBox binaries v${pkgver} from https://www.chitubox.com/download.html"
		msg2 "You can either place it at '${PWD}/$ARCHIVE_NAME' or '$DOWNLOADS_DIR/$ARCHIVE_NAME'"
		msg2 ""
	fi
fi

options=(!strip)

source=(
    "local://$ARCHIVE_NAME"
    "local://chitubox-free.desktop"
    "local://launcher"
)

sha256sums=(
    "c3131af2c0409759b8659f0e0b9a023bf65698245a9073051be5ff7082748e9b"
    "fdd0c1595cfa7ef97ae850b83de328db55150d76f42e6c472167bcc80f87ea47"
    "02fb0cfac1a04d8cc71345a6cf4921c92abcbfdd09e010604a1bc891657a2894"
)

noextract=("$ARCHIVE_NAME")

prepare() {
  mkdir "$DIR_NAME"
  bsdtar -x -C "$DIR_NAME" -f "${ARCHIVE_NAME}"
}

package()
{
    # binary data
    install -d "$pkgdir"/opt
    mv "${srcdir}/$DIR_NAME" "${pkgdir}/opt/chitubox-free"

    # launcher
    install -d "$pkgdir"/usr/bin
    install -Dm755 launcher "$pkgdir"/usr/bin/chitubox-free

    # desktop file
    install -Dm644 chitubox-free.desktop "$pkgdir"/usr/share/applications/chitubox-free.desktop
}
