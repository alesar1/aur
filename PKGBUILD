# Maintainer: Richard Schneider <richard@schneiderbox.net>
# Contributor: Fan Jiang <i@fanjiang.me>

# IMPORTANT: You must download the VMware-Remote-Console .bundle from
# https://www.vmware.com/go/download-vmrc and place it in the directory
# with this PKGBUILD.

# Other VMware packages add files to /usr/lib/vmware/xkeymap. This
# causes pacman to give "exists in filesystem" errors when installing
# multiple VMware packages. If you are doing so, you can uncomment this
# line to remove those file from this package and add a dependency on
# the AUR vmware-keymaps package. That will remove the errors.
#_add_vmware_keymaps_dependency=y

pkgname=vmware-vmrc
pkgver=12.0.1
pkgrel=1
pkgdesc='VMWare Remote Console'
arch=('x86_64')
url="http://www.vmware.com/go/download-vmrc"
license=('custom:vmware')
depends=()

if [ $_add_vmware_keymaps_dependency ]
then
    depends+=('vmware-keymaps')
fi

source=(
    "VMware-Remote-Console-$pkgver-18113358.x86_64.bundle"
    'bootstrap'
    'config'
)

sha256sums=('90eb1d411b15eec77f49cc499d20af8d9b7cdd409bd7b867a18d7740dcf2341b'
            '22282e8643d8a20e63773435161e5a5d01c6acce53aa81f27a4d20f111acd228'
            'c5643ebad140391622c57ab88d6071b91d1ea9a8379c1aec573c845a00be30d4')

build() {
    cd "$srcdir"
    sh ../${source[0]} -x ./bundle
    cd "$srcdir/bundle"
}

package () {
    if [ $_add_vmware_keymaps_dependency ]
    then
        rm -r $srcdir/bundle/vmware-vmrc-app/lib/xkeymap
    fi

    cd "$srcdir/bundle"
    mkdir -p "$pkgdir/usr/share" "$pkgdir/usr/bin" "$pkgdir/usr/lib/vmware" "$pkgdir/usr/lib/vmware/setup"
    cp -r \
        vmware-vmrc/share/* \
        vmware-player-core/share/* \
        vmware-vmrc-app/share/* \
        "$pkgdir/usr/share"

    cp -r \
        vmware-usbarbitrator/bin/* \
        vmware-vmrc-app/bin/* \
        "$pkgdir/usr/bin"

    cp -r \
        vmware-player-core/lib/* \
        vmware-vmrc-app/lib/* \
        vmware-vmrc/lib/* \
        "$pkgdir/usr/lib/vmware"
    
    cp -r \
        vmware-vmrc-setup/vmware-config \
        "$pkgdir/usr/lib/vmware/setup"
    
    install -Dm 644 "$srcdir/bootstrap" "$pkgdir/etc/vmware/bootstrap"
    install -Dm 644 "$srcdir/config" "$pkgdir/etc/vmware/config"

    chmod +x \
        "$pkgdir/usr/bin"/* \
        "$pkgdir/usr/lib/vmware/bin"/* \
        "$pkgdir/usr/lib/vmware/setup"/* \
        "$pkgdir/usr/lib/vmware/lib"/libvmware-gksu.so/gksu-run-helper

    for link in \
        vmrc \
        vmware-gksu \
        vmware-setup-helper
    do
        ln -s /usr/lib/vmware/bin/appLoader "$pkgdir/usr/lib/vmware/bin/$link"
    done

    sed -i 's,@@BINARY@@,/usr/bin/vmrc,' "$pkgdir/usr/share/applications/vmware-vmrc.desktop"

    ln -s '/usr/lib/vmware/lib/libvmplayer.so/libvmplayer.so' "$pkgdir/usr/lib/vmware/lib/libvmplayer.so/libvmrc.so"
    ln -s '/usr/lib/vmware/lib/libvmplayer.so' "$pkgdir/usr/lib/vmware/lib/libvmrc.so"
}
