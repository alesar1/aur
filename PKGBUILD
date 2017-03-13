# Maintainer: Maxwell Pray a.k.a. Synthead <synthead@gmail.com>

pkgname=vmware-workstation
pkgver=12.5.2_4638234
pkgrel=14
pkgdesc='The industry standard for running multiple operating systems as virtual machines on a single Linux PC.'
arch=(x86_64)
url='https://www.vmware.com/products/workstation-for-linux.html'
license=(custom)
conflicts=(
  vmware-modules-dkms
  vmware-ovftool
  vmware-systemd-services
)
depends=(
  dkms
  linux-headers
)
source=(
  "https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-${pkgver/_/-}.x86_64.bundle"

  bootstrap
  config

  config.xml
  datastores.xml
  environments.xml
  proxy.xml

  vmware-hostd-certificates.service
  vmware-hostd.service
  vmware-networks-configuration.service
  vmware-networks.service
  vmware-usbarbitrator.service

  dkms.conf
  vmblock.patch
  vmci.patch
  vmmon.patch
  vmnet.patch
  vsock.patch
)
sha1sums=(
  70f81c36f13e957fded9577fcd7b9b0fe1481c0c

  a91b3d711846dafe10f45d89c531dab703bfb113
  e57f7715c092d9b1fb74a7baadc07ef214cfb4cd

  4bea74ce942e73bf25a8e5fdb0027493d3f114b9
  dfad83699f7546aeb85a38551a33666dbb14535f
  a7e4a6fe33dc6ca95b469ec6f88de21e5b16a95b
  80c5626984ffcdea6fa655d248c731e7c9c657fa

  e9855dfdc07a8261336b13fcf4831f0696e94303
  3ee361c861eee5e462716c3aeb22425193e2e1b6
  d90c687250c16fc5586938de5dc7539a58500adc
  529556a0db5564dc8237ee327a2ee176bcf2c02d
  c1dbfbad3473d12e9c82b75c5f1faf795f3cc217

  3f6f14f8047941c015e9067f62ae403acc7b563c
  be1fb82253f1a95518c990e930c449eaa426c16b
  b4bd05f5d5a98f90fcbdd515b7bb7e6151951e11
  4958ce81e7f5b192e1417426fb70748fdd9a15b9
  51d221c5bc7e3d566d5ce27d0ac603196c12aaf4
  15ecb9143dfa0135ced2e726eff4800448f3d369
)
options=(!strip emptydirs)

prepare() {
  extracted_dir="$srcdir/extracted"
  [[ -d "$extracted_dir" ]] && rm -r "$extracted_dir"

  bash \
    "$(readlink -f "$srcdir/VMware-Workstation-Full-${pkgver/_/-}.x86_64.bundle")" \
    --extract "$extracted_dir"
}

package() {
  # Make directories and copy files.

  mkdir -p \
    "$pkgdir/usr"/{share,bin,doc} \
    "$pkgdir/usr/lib"/{vmware/setup,vmware-vix,vmware-ovftool} \
    "$pkgdir/var/lib/vmware/Shared VMs" \
    "$pkgdir/run/vmware" \
    "$pkgdir/etc/vmware"

  cd "$srcdir/extracted"

  cp -r \
    vmware-workstation/share/* \
    vmware-workstation/doc \
    vmware-workstation/man \
    vmware-network-editor-ui/share/* \
    "$pkgdir/usr/share"

  cp -r \
    vmware-workstation/bin/* \
    vmware-vmx/bin/* \
    vmware-vix-core/bin/* \
    vmware-workstation-server/{vmware-hostd,vmware-vim-cmd,vmware-wssc-adminTool} \
    vmware-network-editor-ui/bin/* \
    "$pkgdir/usr/bin"

  cp -r \
    vmware-workstation/lib/* \
    vmware-player-app/lib/* \
    vmware-vmx/lib/* \
    vmware-workstation-server/{bin,lib,hostd} \
    vmware-usbarbitrator/bin \
    vmware-network-editor/lib \
    "$pkgdir/usr/lib/vmware"

  cp -r \
    vmware-player-setup/vmware-config \
    "$pkgdir/usr/lib/vmware/setup"

  cp -rL \
    vmware-workstation-server/config/etc/vmware/* \
    vmware-workstation-server/etc/vmware/* \
    "$srcdir"/{bootstrap,config} \
    "$pkgdir/etc/vmware"

  cp -r \
    vmware-vix-lib-Workstation1200/lib/Workstation-12.0.0 \
    vmware-vix-core/vixwrapper-config.txt \
    "$pkgdir/usr/lib/vmware-vix"

  cp -r \
    vmware-ovftool/* \
    "$pkgdir/usr/lib/vmware-ovftool"

  for isoimage in \
    freebsd \
    linux \
    netware \
    solaris \
    winPre2k \
    windows
  do
    install -Dm 644 "vmware-tools-$isoimage/$isoimage.iso" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso"
    install -Dm 644 "vmware-tools-$isoimage/$isoimage.iso.sig" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso.sig"
  done

  install -Dm 644 vmware-player-app/lib/isoimages/tools-key.pub "$pkgdir/usr/lib/vmware/isoimages/tools-key.pub"

  install -Dm 644 vmware-vmx/extra/modules.xml "$pkgdir/usr/lib/vmware/modules/modules.xml"
  install -Dm 644 vmware-installer/bootstrap "$pkgdir/etc/vmware-installer/bootstrap"

  for hostd_file in config datastores environments proxy; do
    install -Dm 644 "$srcdir/$hostd_file.xml" "$pkgdir/etc/vmware/hostd/$hostd_file.xml"
  done

  for service_file in \
    vmware-hostd-certificates.service \
    vmware-hostd.service \
    vmware-networks-configuration.service \
    vmware-networks.service \
    vmware-usbarbitrator.service
  do
    install -Dm 644 \
      "$srcdir/$service_file" \
      "$pkgdir/usr/lib/systemd/system/$service_file"
  done


  # Apply permissions where necessary.

  chmod +x \
    "$pkgdir/usr/bin"/* \
    "$pkgdir/usr/lib/vmware/bin"/* \
    "$pkgdir/usr/lib/vmware/setup/vmware-config" \
    "$pkgdir/usr/lib/vmware/lib"/{wrapper-gtk24.sh,libgksu2.so.0/gksu-run-helper} \
    "$pkgdir/usr/lib/vmware-ovftool"/{ovftool,ovftool.bin}

  chmod -R 600 "$pkgdir/etc/vmware/ssl"
  chmod +s "$pkgdir/usr/lib/vmware/bin/vmware-vmx"


  # Add symlinks the installer would create.

  for link in \
    licenseTool \
    thnuclnt \
    vmplayer \
    vmware \
    vmware-app-control \
    vmware-enter-serial \
    vmware-fuseUI \
    vmware-gksu \
    vmware-modconfig \
    vmware-modconfig-console \
    vmware-netcfg \
    vmware-tray \
    vmware-unity-helper \
    vmware-vmblock-fuse \
    vmware-zenity
  do
    ln -s /usr/lib/vmware/bin/appLoader "$pkgdir/usr/lib/vmware/bin/$link"
  done

  ln -s /usr/lib/vmware/icu "$pkgdir/etc/vmware/icu"
  ln -s /usr/lib/vmware-ovftool/ovftool "$pkgdir/usr/bin/ovftool"


  # Replace placeholder "variables" with real paths.

  for file in \
    pango/pangorc \
    pango/pango.modules \
    pango/pangox.aliases \
    gtk-2.0/gdk-pixbuf.loaders \
    gtk-2.0/gtk.immodules
  do
    sed -i 's,@@LIBCONF_DIR@@,/usr/lib/vmware/libconf,g' "$pkgdir/usr/lib/vmware/libconf/etc/$file"
  done

  sed -i 's,@@BINARY@@,/usr/bin/vmware,' "$pkgdir/usr/share/applications/vmware-workstation.desktop"
  sed -i 's,@@BINARY@@,/usr/bin/vmware-netcfg,' "$pkgdir/usr/share/applications/vmware-netcfg.desktop"
  sed -i 's,@@VMWARE_INSTALLER@@,/usr/bin/vmware,' "$pkgdir/usr/share/applications/vmware-workstation.desktop"

  sed -i 's,@@AUTHD_PORT@@,902,' "$pkgdir/usr/lib/vmware/hostd/docroot/client/clients.xml"

  sed \
    -e 's/@@VERSION@@/2.1.0/' \
    -e 's,@@VMWARE_INSTALLER@@,/usr/lib/vmware-installer/2.1.0,' \
    -i "$pkgdir/etc/vmware-installer/bootstrap"


  # Patch up the VMware kernel sources and configure DKMS.

  dkms_dir="$pkgdir/usr/src/$pkgname-$pkgver"

  install -Dm 644 "$srcdir/dkms.conf" "$dkms_dir/dkms.conf"

  sed \
    -e "s/@PKGNAME@/$pkgname/g" \
    -e "s/@PKGVER@/$pkgver/g" \
    -i "$dkms_dir/dkms.conf"

  find vmware-vmx/lib/modules/source -mindepth 1 -exec bsdtar -xf {} -C "$dkms_dir" \;

  for module in vmblock vmci vmmon vmnet vsock; do
    patch -p2 --read-only=ignore --directory="$dkms_dir/$module-only" < "$srcdir/$module.patch"
  done
}
