# Original contributors:
#   Tobias Powalowski <tpowa@archlinux.org>
#   Thomas Baechler <thomas@archlinux.org>

_enable_BFQ=n
_enable_NUMA=n

pkgname=(linux-lts314-ck linux-lts314-ck-headers)
pkgver=3.14.58
pkgrel=3
arch=(i686 x86_64)
url="https://www.kernel.org/"
license=(GPL2)
makedepends=(kmod inetutils bc)
options=(!strip)
source=(
    "https://www.kernel.org/pub/linux/kernel/v3.x/linux-${pkgver}.tar.xz"
    "https://www.kernel.org/pub/linux/kernel/v3.x/linux-${pkgver}.tar.sign"
    "http://ck.kolivas.org/patches/3.0/3.14/3.14-ck1/patch-3.14-ck1.bz2"
    "http://ck.kolivas.org/patches/3.0/3.18/3.18-ck1/patches/hz-default_1000.patch"
    "http://ck.kolivas.org/patches/3.0/3.18/3.18-ck1/patches/hz-no_default_250.patch"
    "http://repo-ck.com/source/gcc_patch/enable_additional_cpu_optimizations_for_gcc_v4.9+.patch.gz"
    "bfs447-454.patch"
    "linux-lts314-ck.preset"
    "change-default-console-loglevel.patch"
    "0001-Bluetooth-allocate-static-minor-for-vhci.patch"
    "0002-module-allow-multiple-calls-to-MODULE_DEVICE_TABLE-p.patch"
    "0003-module-remove-MODULE_GENERIC_TABLE.patch"
    "0006-genksyms-fix-typeof-handling.patch"
    "config"
    "config.x86_64"
    "http://algo.ing.unimo.it/people/paolo/disk_sched/patches/3.14.0-v7r8/0001-block-cgroups-kconfig-build-bits-for-BFQ-v7r8-3.14.patch"
    "http://algo.ing.unimo.it/people/paolo/disk_sched/patches/3.14.0-v7r8/0002-block-introduce-the-BFQ-v7r8-I-O-sched-for-3.14.patch"
    "http://algo.ing.unimo.it/people/paolo/disk_sched/patches/3.14.0-v7r8/0003-block-bfq-add-Early-Queue-Merge-EQM-to-BFQ-v7r8-for-3.14.0.patch"
    "should_resched-offsets.patch"
)

sha512sums=(
    "ba0eea0b59be3fce5fe82283c9fb4186af991d24c5a6ea50f21bda79aa66c06d11aa03296d55ad3d2e7b4883bd66c539143acfddee75dadf4331dd9fdeb92ecc"
    "SKIP"
    "d745370376e660245e0a5cc4512f0c584a4c782ddb0747637d6ec60021d95afa09d5728f44756c48843b398ba3072823bea99b1713c0833c941a522da0b6f305"
    "fafb74bf01d28fb8fc5f8e54f480e9ddddba04dcf09cb5f774cb7e61da41c5f946897d700410d90f20afa426918beec299313b72caf49e9bc595eb7e4e2cbb9e"
    "2854937353af5a09f1b1a230603dbbd6ed341acadc4a649b9072d98a6b41681fdf688fc0aa310ca170cab2b7e98d36c141222e44c6a49a8a7005c7107a01cbf6"
    "1b8ac77604b891aac57257bc3d9578596f38f2f75a625310a7d36e7f59612a616da6ef12d028622cb855a065e4fadc739cb67d12370c49bb52708744ad312957"
    "1a112daacec768b588af4549a6e90fa24a251b4632bd14dd1ccbb818838a009df25f9df369ad71e3ef9a6900f4e8ff37f8132bd8450c1653c1a6eb7bdffb0ad5"
    "fa201eeaf2613597b7d633897016e16bc3c379865d0681c61cd44b6a35c8953040a127ecec1c58482b81b261ead301b68c99a153151c8a83e0aeacb883633b48"
    "502192b5ce94c8254205f5ddb85bf50c5f1e78c768817b10dca3a7716a8c59d5e093842631acb51e3805cbf85522e0a9200942656f11bbb4ea1b7d61e24ddd78"
    "f26306c173e3fc35ae6df4c43e9ddbac33845dcc1fb0def612fe370c2d7b8f904b4c70d267eb52717ade879d1e289695b9e971dfcb1c963dac4c6e2fb5230453"
    "da69065f317212c7937f5c3110afdef6006da7756b0a2a98c4bff94db12eb503dc89040aa3cd7a1655ba1b0641f47dda4e60933309e231eaecbe9bd79cb06ebd"
    "4b9fa6afdd1f4f4f6a3a439380cff3376ef33e782aac0ae92421f4b7c40140d57a04d7bc57dfd9fb59fdefb3a0a55fe7e7d6022314b11ef454a1cae4b75cf264"
    "fdb67e9956d9af1518d0198b86b13150b28f43dd28eb52222a9c43699f7304cd1a56d7f421a0690fa4c0d2c266fd5504da9d6217f83a42d05f35b713fd85e2dd"
    "bbb7d543d929345b86b618b3dd6476e5085687e6c8bf9dff020700c59ba6cc91f65372c6112ecacd5676c86c354bdeb10bde16103cbfd53536ea5c0c356fbec8"
    "2f534566d040089fb6206d200346758f3f4f9199809fc9750c58d7102c3048db731a0bf78650a0c6f5a15c3cb7edb8ecf182a53c104c2d76e7d141d71589fde4"
    "edf73585f1363011ba4235919b4265713d3943e3a93996822408ee4c99403a52c81d7cbf23d261aabeefeb41d2bb9b5ad26c4c1a0c6af7e27a4e092654c8e967"
    "91340f269b2aefb4df0e9999dc3664ded7d1758a7257da1268f95ced5f549a1883127b7260657a2ee0782922e7848fb3fac4ae05d822c793ecc9f2c1be9d4b5f"
    "9b8f4c92e9e0265e77ec9ad469092d0a1f5d657ec2d6a91c4aed344bc56909acc6e115a21eb9f225fa452432bc4f69c0584e7fc38d4f72a6c711631c0a8105cd"
    "4f8613760db9ec310f125a8431e127b6edf87e384b16e840e051fe61847bde044915e8e7b19e03123a6ed3de47d15f58ceff890dd4ae739a0bfe06b3d064d361"
)
validpgpkeys=(
    "ABAF11C65A2970B130ABE3C479BE3E4300411886" # Linux Torvalds
    "647F28654894E3BD457199BE38DBBDC86092693E" # Greg Kroah-Hartman
)

prepare() {
    cd "${srcdir}/linux-${pkgver}"

    patch -p1 -i "${srcdir}/change-default-console-loglevel.patch"

    patch -p1 -i "${srcdir}/0001-Bluetooth-allocate-static-minor-for-vhci.patch"
    patch -p1 -i "${srcdir}/0002-module-allow-multiple-calls-to-MODULE_DEVICE_TABLE-p.patch"
    patch -p1 -i "${srcdir}/0003-module-remove-MODULE_GENERIC_TABLE.patch"
    patch -p1 -i "${srcdir}/0006-genksyms-fix-typeof-handling.patch"

    sed -i -re "s/^(.EXTRAVERSION).*$/\1 = /" "${srcdir}/patch-3.14-ck1"

    patch -p1 -i "${srcdir}/patch-3.14-ck1"

    patch -p1 -i "${srcdir}/enable_additional_cpu_optimizations_for_gcc_v4.9+.patch"

    patch -p1 -i "${srcdir}/0001-block-cgroups-kconfig-build-bits-for-BFQ-v7r8-3.14.patch"
    patch -p1 -i "${srcdir}/0002-block-introduce-the-BFQ-v7r8-I-O-sched-for-3.14.patch"
    patch -p1 -i "${srcdir}/0003-block-bfq-add-Early-Queue-Merge-EQM-to-BFQ-v7r8-for-3.14.0.patch"

    patch -p1 -i "${srcdir}/bfs447-454.patch"

    patch -p0 -i "${srcdir}/should_resched-offsets.patch" # Offsets for should_resched are required as of commit fe32d3cd5e8eb0f82e459763374aa80797023403

    if [ "${CARCH}" = "x86_64" ]; then
        cat "${srcdir}/config.x86_64" > ./.config
    else
        cat "${srcdir}/config" > ./.config
    fi

    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"-lts314-ck\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config

    if [ "$_enable_NUMA" = "n" ]; then
        if [ "${CARCH}" = "x86_64" ]; then
            sed -i -e "s/CONFIG_NUMA=y/# CONFIG_NUMA is not set/" \
                -i -e "/CONFIG_AMD_NUMA=y/d" \
                -i -e "/CONFIG_X86_64_ACPI_NUMA=y/d" \
                -i -e "/CONFIG_NODES_SPAN_OTHER_NODES=y/d" \
                -i -e "/# CONFIG_NUMA_EMU is not set/d" \
                -i -e "/CONFIG_NODES_SHIFT=6/d" \
                -i -e "/CONFIG_NEED_MULTIPLE_NODES=y/d" \
                -i -e "/# CONFIG_MOVABLE_NODE is not set/d" \
                -i -e "/CONFIG_USE_PERCPU_NUMA_NODE_ID=y/d" \
                -i -e "/CONFIG_ACPI_NUMA=y/d" ./.config
        fi
    fi

    if [ "$_enable_BFQ" = "y" ]; then
        sed -i -e "/CONFIG_DEFAULT_IOSCHED/ s,cfq,bfq," \
            -i -e s"/CONFIG_DEFAULT_CFQ=y/# CONFIG_DEFAULT_CFQ is not set\nCONFIG_DEFAULT_BFQ=y/" ./.config
    fi

    sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

    sed -i "2iexit 0" scripts/depmod.sh

    make prepare

    #sudo /usr/bin/modprobed_db recall
    #make localmodconfig

    #make nconfig
    #make menuconfig
    #make xconfig
    #make gconfig
}

build() {
    cd "${srcdir}/linux-${pkgver}"

    make LOCALVERSION= bzImage modules
}

package_linux-lts314-ck() {
    pkgdesc="Linux 3.14 with Brain Fuck Scheduler"
    depends=(coreutils linux-firmware kmod "mkinitcpio>=0.7")
    optdepends=("crda: to set the correct wireless channels for your country")
    backup=(etc/mkinitcpio.d/linux-lts314-ck.preset)
    install=linux-lts314-ck.install

    cd "${srcdir}/linux-${pkgver}"

    KARCH=x86

    _kernver="$(make LOCALVERSION= kernelrelease)"

    mkdir -p "${pkgdir}"/{lib/modules,lib/firmware,boot}
    make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}" modules_install
    cp arch/$KARCH/boot/bzImage "${pkgdir}/boot/vmlinuz-linux-lts314-ck"

    cp -f "${startdir}/${install}" "${startdir}/${install}.pkg"
    true && install=${install}.pkg
    sed -e  "s/KERNEL_NAME=.*/KERNEL_NAME=-lts314-ck/g" \
        -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
        -i "${startdir}/${install}"

    install -D -m644 "${srcdir}/linux-lts314-ck.preset" "${pkgdir}/etc/mkinitcpio.d/linux-lts314-ck.preset"
    sed -e "1s|'linux.*'|'linux-lts314-ck'|" \
        -e "s|ALL_kver=.*|ALL_kver=\"/boot/vmlinuz-linux-lts314-ck\"|" \
        -e "s|default_image=.*|default_image=\"/boot/initramfs-linux-lts314-ck.img\"|" \
        -e "s|fallback_image=.*|fallback_image=\"/boot/initramfs-linux-lts314-ck-fallback.img\"|" \
        -i "${pkgdir}/etc/mkinitcpio.d/linux-lts314-ck.preset"

    rm -f "${pkgdir}/lib/modules/${_kernver}/"{source,build}
    rm -rf "${pkgdir}/lib/firmware"

    find "${pkgdir}" -name '*.ko' -exec gzip -9 {} \;

    ln -s "../extramodules-3.14-lts314-ck" "${pkgdir}/lib/modules/${_kernver}/extramodules"
    mkdir -p "${pkgdir}/lib/modules/extramodules-3.14-lts314-ck"
    echo "${_kernver}" > "${pkgdir}/lib/modules/extramodules-3.14-lts314-ck/version"

    depmod -b "${pkgdir}" -F System.map "${_kernver}"

    mkdir -p "${pkgdir}/usr"
    mv "${pkgdir}/lib" "${pkgdir}/usr/"

    install -D -m644 vmlinux "${pkgdir}/usr/lib/modules/${_kernver}/build/vmlinux"
}

package_linux-lts314-ck-headers() {
    pkgdesc='Header files and scripts for linux-lts314-ck'
    depends=('linux-lts314-ck')

    install -dm755 "${pkgdir}/usr/lib/modules/${_kernver}"

    cd "${srcdir}/linux-${pkgver}"
    install -D -m644 Makefile \
        "${pkgdir}/usr/lib/modules/${_kernver}/build/Makefile"
    install -D -m644 kernel/Makefile \
        "${pkgdir}/usr/lib/modules/${_kernver}/build/kernel/Makefile"
    install -D -m644 .config \
        "${pkgdir}/usr/lib/modules/${_kernver}/build/.config"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include"

    for i in acpi asm-generic config crypto drm generated keys linux math-emu media net pcmcia scsi sound trace uapi video xen; do
        cp -a include/${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/include/"
    done

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86"
    cp -a arch/x86/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86/"

    cp Module.symvers "${pkgdir}/usr/lib/modules/${_kernver}/build"
    cp -a scripts "${pkgdir}/usr/lib/modules/${_kernver}/build"

    chmod og-w -R "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts"
    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/.tmp_versions"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel"

    cp arch/${KARCH}/Makefile "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"

    if [ "${CARCH}" = "i686" ]; then
        cp arch/${KARCH}/Makefile_32.cpu "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"
    fi

    cp arch/${KARCH}/kernel/asm-offsets.s "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel/"

    install -D -m644 Documentation/DocBook/Makefile \
        "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"
    cp drivers/md/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux"
    cp include/linux/inotify.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211"
    cp net/mac80211/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core"
    cp drivers/media/dvb-core/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb"
    cp include/config/dvb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends"
    cp drivers/media/dvb-frontends/lgdt330x.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c"
    cp drivers/media/i2c/msp3400-driver.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb"
    cp drivers/media/usb/dvb-usb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends"
    cp drivers/media/dvb-frontends/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners"
    cp drivers/media/tuners/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners/"

    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs"
    mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/mm"
    cp fs/xfs/xfs_sb.h "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs/xfs_sb.h"

    for i in $(find . -name "Kconfig*"); do
        mkdir -p "${pkgdir}"/usr/lib/modules/${_kernver}/build/`echo ${i} | sed 's|/Kconfig.*||'`
        cp ${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/${i}"
    done

    chown -R root.root "${pkgdir}/usr/lib/modules/${_kernver}/build"
    find "${pkgdir}/usr/lib/modules/${_kernver}/build" -type d -exec chmod 755 {} \;

    find "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts" -type f -perm -u+w 2>/dev/null | while read binary ; do
        case "$(file -bi "${binary}")" in
            *application/x-sharedlib*)
                /usr/bin/strip ${STRIP_SHARED} "${binary}";;
            *application/x-archive*)
                /usr/bin/strip ${STRIP_STATIC} "${binary}";;
            *application/x-executable*)
                /usr/bin/strip ${STRIP_BINARIES} "${binary}";;
        esac
    done

    rm -rf "${pkgdir}/usr/src/linux-${_kernver}/arch/"{alpha,arc,arm,arm26,arm64,avr32,blackfin,c6x,cris,frv,h8300,hexagon,ia64,m32r,m68k,m68knommu,metag,mips,microblaze,mn10300,openrisc,parisc,powerpc,ppc,s390,score,sh,sh64,sparc,sparc64,tile,unicore32,um,v850,xtensa}
}
