# Contributor: Eric Fung <loseurmarbles[AT]gmail[DOT]com>
# Contributor: Jingbei Li <i AT jingbei DOT li>
# Contributor: Andrea Fagiani <andfagiani_at_gmail_dot_com>
# Contributor: solarus <in01-archlinux at tunna.org>

pkgname=eclim
pkgver=2.21.0
pkgrel=1
pkgdesc="Brings Eclipse functionality to Vim"
arch=(i686 x86_64)
url="http://eclim.org/"
license=('GPL3')
depends=('java-environment' 'eclipse>=4.21' 'vim>=7.1')
makedepends=('java-environment<=11' 'ant' 'python-sphinx')
optdepends=('eclipse-pydev')
install=${pkgname}.install
source=("https://github.com/ervandew/eclim/releases/download/${pkgver}/${pkgname}_${pkgver}.tar.gz")
sha256sums=('0b943a47e01f4d1454637969ac84d148a607d5508d5452d54b797e52ff76c15a')

prepare() {

    cd "${srcdir}/${pkgname}_${pkgver}"

    chmod +x org.eclim/nailgun/configure bin/sphinx
    sed -e '33d' -i doc/content/conf.py

    echo >&2 "--------------------------- NOTE ------------------------------"
    echo >&2 "Make sure to set your Java Environment to the correct version"
    echo >&2 "using archlinux-java or else build may fail. Currently known"
    echo >&2 "to be able to build with Java 11 or lower."
    echo >&2 "---------------------------------------------------------------"
}

build() {

    cd "${srcdir}/${pkgname}_${pkgver}"

    TMPDIR=$(mktemp -d eclipse.dummy.XXXXX)
    # Make a temporary dummy directory to use so the build doesn't complain
    # about an unwritable directory.
    ant -Declipse.home=/usr/lib/eclipse -Declipse.dest=${TMPDIR} build

    rm -r ${TMPDIR}
}

package() {

    cd ${srcdir}/${pkgname}_${pkgver}

    install -d "${pkgdir}/usr/lib/eclipse"
    install -d "${pkgdir}/usr/share/vim/vimfiles"

    ant -Declipse.home=/usr/lib/eclipse              \
        -Declipse.dest=${pkgdir}/usr/lib/eclipse     \
        -Dvim.files=${pkgdir}/usr/share/vim/vimfiles \
        vimdocs deploy.vim deploy.eclipse

    install -d "${pkgdir}/usr/share/doc/eclim"
    cp -r gh-pages/* "${pkgdir}/usr/share/doc/eclim/"

    install -Dm644 -t "${pkgdir}/usr/share/licenses/eclim/" \
        "${srcdir}/${pkgname}_${pkgver}/copyright"          \
        "${srcdir}/${pkgname}_${pkgver}/NOTICE"

    # Remove unecessary/junk files from docs
    rm "${pkgdir}/usr/share/doc/eclim/CNAME" \
       "${pkgdir}/usr/share/doc/eclim/objects.inv"

    rm "${pkgdir}/usr/lib/eclipse/plugins/org.eclim_${pkgver}/nailgun/Makefile"   \
       "${pkgdir}/usr/lib/eclipse/plugins/org.eclim_${pkgver}/nailgun/config.log" \
       "${pkgdir}/usr/lib/eclipse/plugins/org.eclim_${pkgver}/nailgun/config.status"

    sed -e "s|${pkgdir}||g" \
        -i "${pkgdir}/usr/lib/eclipse/plugins/org.eclim_${pkgver}/bin/eclimd" \
        -i "${pkgdir}/usr/lib/eclipse/plugins/org.eclim_${pkgver}/plugin.properties"
}
