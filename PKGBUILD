# Maintainer: Jean-Marc Lenoir <archlinux "at" jihemel "dot" com>

############################################################################
# Patch VMware Workstation to enable macOS guests support
# Uncomment the line below to enable it

#_enable_macOS_guests=y

# CAUTION: Run macOS on a non Apple computer may be forbidden in your country.
# Source of the patch: https://github.com/DrDonk/unlocker
# Forum: http://www.insanelymac.com/forum/topic/303311-workstation-1112-player-712-fusion-78-and-esxi-6-mac-os-x-unlocker-2
############################################################################

#PKGEXT=.pkg.tar
pkgname=vmware-workstation12
pkgver=12.5.9
_buildver=7535481
_pkgver=${pkgver}_${_buildver}
pkgrel=8
pkgdesc='The industry standard for running multiple operating systems as virtual machines on a single Linux PC.'
arch=(x86_64)
url='https://www.vmware.com/products/workstation-for-linux.html'
license=(custom)
install="vmware-workstation.install"
conflicts=(
  vmware-workstation
  vmware-modules-dkms
  vmware-ovftool
  vmware-patch
  vmware-systemd-services
)
provides=(
  vmware-workstation=$pkgver
  vmware-ovftool
)
depends=(
  vmware-keymaps
  dkms
  ncurses5-compat-libs
  fuse2
  gtkmm
  libcanberra
  hicolor-icon-theme
  # needed to replace internal libs:
  fontconfig
  freetype2
  zlib
)
optdepends=(
  'linux-headers: build modules against Arch kernel'
)
makedepends=(
  sqlite
)
backup=(
  'etc/vmware/config'
  'etc/vmware/hostd/authorization.xml'
  'etc/vmware/hostd/config.xml'
  'etc/vmware/hostd/datastores.xml'
  'etc/vmware/hostd/dispatcher.xml'
  'etc/vmware/hostd/proxy.xml'
  'etc/vmware/hostd/tagExtractor.xml'
  'etc/vmware/netmap.conf'
  'etc/vmware/ssl/hostd.ssl.config'
  'etc/pam.d/vmware-authd'
  'etc/conf.d/vmware'
)
source=(
  "https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-${_pkgver/_/-}.${CARCH}.bundle"

  'bootstrap'
  'vmware-vix-bootstrap'
  'config'
  'pam.d-vmware-authd'
  'configure-initscript.sh'
  'vmware-environment.sh'

  'config.xml'
  'datastores.xml'
  'environments.xml'
  'proxy.xml'
  'vmAutoStart.xml'

  'vmware-hostd-certificates.service'
  'vmware-hostd.service'
  'vmware-authd.service'
  'vmware-networks-configuration.service'
  'vmware-networks.service'
  'vmware-usbarbitrator.service'

  'dkms.conf.in'
  'Makefile'
  'vmmon.patch'
  'vmnet.patch'
)
sha256sums=(
  'd099c048a33e58e05a5b247a2fc216e5178eb35097ed3e3836de52c6388121c3'

  '12e7b16abf8d7e858532edabb8868919c678063c566a6535855b194aac72d55e'
  'da1698bf4e73ae466c1c7fc93891eba4b9c4581856649635e6532275dbfea141'
  '04cf8f4f19f8aa2b298b0c4f4929488dfd05aad108d2f87b8587666da236cc64'
  'd50aa0a3fe94025178965d988e18d41eb60aa1ce2b28ee6e3ca15edeabfa2ca7'
  '8e4d08668a66be79a900521792b39c16a026cc90659241edee80b64e701bfbcd'
  'b94959a11b28e51b541321be0588190eb10825e9ff55cbd16eb01483a839a69f'

  'd0806b6cb99af04232585def7b8043df3104b9b17470ea70abbd5bedc1e7ca16'
  '434cd4aa440d36b75ee20e0b588aaad874bb0d796173990bc4046667c66f5099'
  '25c5aa39489d14a60f9cb30bdd7b21d36399c3355daee8bf5fbebcb62fe9f45f'
  '3c802523606184a5e8ebbe931d9c6c70d83ff8c6833b9f48aa264f0bd5a18a88'
  'ad522a8cbc6103134ce5e677a01b503cd21875cbceb37bd13fd870ebd9ad0e6d'

  'f9440479f3ae5ad0a39bba3150276627878bf83d6879444fb327c53a1dbb5a4d'
  '42594b60085d0bbef01ab07b9f8b0d18640001107ce61cc0ddf02d0ab415140f'
  'e4c2e97acf07c52de570dd4333d67acfb593db719937a563c6075ab773dcce33'
  'e3812b78158672c7d96b6a58877681462f3fbdfe99a948b32c80c755c8682450'
  'c0a5aea785db06921fb350d36d5e0fd9a14f5eee0c835686ec6fea1af8c92245'
  'd7a9fbf39a0345ae2f14f7f389f30b1110f605d187e0c241e99bbb18993c250d'

  '05e26d8b21d190ebabb7f693998114d9d5991d9dfb71acb4d990293a65b6b487'
  '6ce902b1dab8fc69be253abd8e79017011985eca850ff7acc7282f9ab668e35d'
  '39644192022eec0e801774dfb9b084d49e73424dc780955d76c17241ddeb2f6f'
  '0363bf465990c726f6f238360f984a63ac1a715ee837561e2bc13e0c0f078a00'
)
options=(!strip emptydirs)


_isoimages=(freebsd linux linuxPreGlibc25 netware solaris windows winPre2k winPreVista)

if [ -n "$_enable_macOS_guests" ]; then

_vmware_fusion_ver=8.5.10_7527438
# List of VMware Fusion versions: https://softwareupdate.vmware.com/cds/vmw-desktop/fusion/

makedepends+=(
  python2
  unzip
)

source+=(
  "https://softwareupdate.vmware.com/cds/vmw-desktop/fusion/${_vmware_fusion_ver/_//}/packages/com.vmware.fusion.tools.darwinPre15.zip.tar"
  "https://softwareupdate.vmware.com/cds/vmw-desktop/fusion/${_vmware_fusion_ver/_//}/packages/com.vmware.fusion.tools.darwin.zip.tar"
  'unlocker.py'
)
sha256sums+=(
  '78aaa6ba65d178d6242ad73b7e2e552ec707798ce5f4925a0adebf30f844dc17'
  '6327a76c2503f56d8bc67279f289ed4bb53e236d965ad78c0fcf7ee9e2bbb6c6'
  '29e0b0db9c0296ab81eee543803c4bd430e2c69c76e33492910e17280da1c05c'
)

_fusion_isoimages=(darwin darwinPre15)
fi


_create_database_file() {
  # Create a database which contains the list of guest tools (necessary to avoid that vmware try to download them)
  local database_filename="$pkgdir/etc/vmware-installer/database"
  echo -n "" > "$database_filename"

  sqlite3 "$database_filename" "CREATE TABLE settings(key VARCHAR PRIMARY KEY, value VARCHAR NOT NULL, component_name VARCHAR NOT NULL);"
  sqlite3 "$database_filename" "INSERT INTO settings(key,value,component_name) VALUES('db.schemaVersion','2','vmware-installer');"
  sqlite3 "$database_filename" "CREATE TABLE components(id INTEGER PRIMARY KEY, name VARCHAR NOT NULL, version VARCHAR NOT NULL, buildNumber INTEGER NOT NULL, component_core_id INTEGER NOT NULL, longName VARCHAR NOT NULL, description VARCHAR, type INTEGER NOT NULL);"

  for isoimage in ${_isoimages[@]}
  do
	local version=$(cat "$srcdir/extracted/vmware-tools-$isoimage/manifest.xml" | grep -oPm1 "(?<=<version>)[^<]+")
	sqlite3 "$database_filename" "INSERT INTO components(name,version,buildNumber,component_core_id,longName,description,type) VALUES(\"vmware-tools-$isoimage\",\"$version\",\"${_pkgver#*_}\",1,\"$isoimage\",\"$isoimage\",1);"
  done

if [ -n "$_enable_macOS_guests" ]; then
  for isoimage in ${_fusion_isoimages[@]}
  do
	sqlite3 "$database_filename" "INSERT INTO components(name,version,buildNumber,component_core_id,longName,description,type) VALUES(\"vmware-tools-$isoimage\",\"1\",\"${_vmware_fusion_ver#*_}\",1,\"$isoimage\",\"$isoimage\",1);"
  done
fi
}

prepare() {
  extracted_dir="$srcdir/extracted"
  [[ -d "$extracted_dir" ]] && rm -r "$extracted_dir"

  bash \
    "$(readlink -f "$srcdir/VMware-Workstation-Full-${_pkgver/_/-}.${CARCH}.bundle")" \
    --extract "$extracted_dir"

if [ -n "$_enable_macOS_guests" ]; then
  for isoimage in ${_fusion_isoimages[@]}
  do
    unzip -q com.vmware.fusion.tools.$isoimage.zip
    rm manifest.plist
  done

  sed -i -e "s|/usr/lib/vmware/|${pkgdir}/usr/lib/vmware/|" "$srcdir/unlocker.py"
fi
}

package() {
  local vmware_installer_version=$(cat "$srcdir/extracted/vmware-installer/manifest.xml" | grep -oPm1 "(?<=<version>)[^<]+")

  # Make directories and copy files.

  mkdir -p \
    "$pkgdir/etc"/{cups,pam.d,modprobe.d,profile.d,thnuclnt,vmware} \
    "$pkgdir/usr"/{share,bin} \
    "$pkgdir/usr/include/vmware-vix" \
    "$pkgdir/usr/lib"/{vmware/setup,vmware-vix,vmware-ovftool,vmware-installer/"$vmware_installer_version",cups/filter,modules-load.d} \
    "$pkgdir/usr/share"/{doc/vmware-vix,licenses/"$pkgname"} \
    "$pkgdir/var/lib/vmware/Shared VMs"

  cd "$srcdir/extracted"

  cp -r \
    vmware-workstation/share/* \
    vmware-workstation/man \
    vmware-network-editor-ui/share/* \
    vmware-player-app/share/* \
    "$pkgdir/usr/share"

  cp -r \
    vmware-workstation/bin/* \
    vmware-vmx/{,s}bin/* \
    vmware-vix-core/bin/* \
    vmware-vprobe/bin/* \
    vmware-workstation-server/{vmware-hostd,vmware-vim-cmd,vmware-wssc-adminTool} \
    vmware-network-editor-ui/bin/* \
    vmware-player-app/bin/* \
    "$pkgdir/usr/bin"

  cp -r \
    vmware-workstation/lib/* \
    vmware-player-app/lib/* \
    vmware-vmx/lib/* \
    vmware-vprobe/lib/* \
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
    "$pkgdir/etc/vmware"

  cp -r \
    vmware-vix-lib-Workstation1200/lib/Workstation-12.0.0 \
    vmware-vix-core/{lib/*,vixwrapper-config.txt} \
    "$pkgdir/usr/lib/vmware-vix"
  cp vmware-vix-core/vix-perl.tar.nogz "$pkgdir/usr/lib/vmware-vix/vix-perl.tar.gz"

  cp -r \
    vmware-vix-core/doc/* \
    "$pkgdir/usr/share/doc/vmware-vix"

  cp -r \
    vmware-ovftool/* \
    "$pkgdir/usr/lib/vmware-ovftool"

  cp -r \
    vmware-installer/{python,sopython,vmis,vmis-launcher,vmware-installer,vmware-installer.py} \
    "$pkgdir/usr/lib/vmware-installer/$vmware_installer_version"

  cp -r \
    vmware-player-app/etc/cups/* \
    "$pkgdir/etc/cups"

  cp -r \
    vmware-player-app/extras/thnucups \
    "$pkgdir/usr/lib/cups/filter"

  cp -r \
    vmware-vix-core/include/* \
    "$pkgdir/usr/include/vmware-vix"

  for isoimage in ${_isoimages[@]}
  do
    install -Dm 644 "vmware-tools-$isoimage/$isoimage.iso" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso"
    install -Dm 644 "vmware-tools-$isoimage/$isoimage.iso.sig" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso.sig"
  done

  install -Dm 644 "vmware-player-app/doc/LearnMore.txt" "$pkgdir/usr/share/licenses/$pkgname/Privacy.txt"
  install -Dm 644 "vmware-workstation/doc/EULA" "$pkgdir/usr/share/licenses/$pkgname/VMware Workstation - EULA.txt"
  install -Dm 644 "vmware-workstation/doc"/*open_source_licenses.txt "$pkgdir/usr/share/licenses/$pkgname"
  mv "$pkgdir/usr/lib/vmware-ovftool/vmware.eula" "$pkgdir/usr/share/licenses/$pkgname/VMware OVF Tool component for Linux - EULA.txt"
  rm "$pkgdir/usr/lib/vmware-ovftool"/{vmware-eula.rtf,open_source_licenses.txt,manifest.xml}

  install -Dm 755 "$srcdir/configure-initscript.sh" "$pkgdir/usr/lib/vmware-installer/$vmware_installer_version/bin/configure-initscript.sh"

  install -Dm 644 "vmware-vmx/etc/modprobe.d/modprobe-vmware-fuse.conf" "$pkgdir/etc/modprobe.d/vmware-fuse.conf"

  install -Dm 644 vmware-player-app/lib/isoimages/tools-key.pub "$pkgdir/usr/lib/vmware/isoimages/tools-key.pub"

  install -Dm 644 vmware-vmx/extra/modules.xml "$pkgdir/usr/lib/vmware/modules/modules.xml"
  install -Dm 644 vmware-installer/bootstrap "$pkgdir/etc/vmware-installer/bootstrap"
  install -Dm 644 "$srcdir/vmware-vix-bootstrap" "$pkgdir/etc/vmware-vix/bootstrap"
  install -Dm 644 "$srcdir"/{bootstrap,config} "$pkgdir/etc/vmware"

  rm -r "$pkgdir/usr/lib/vmware/xkeymap" # these files are now provided by vmware-keymaps package

  for hostd_file in config datastores environments proxy vmAutoStart; do
    install -Dm 644 "$srcdir/$hostd_file.xml" "$pkgdir/etc/vmware/hostd/$hostd_file.xml"
  done

  install -Dm 644 "$srcdir/pam.d-vmware-authd" "$pkgdir/etc/pam.d/vmware-authd"

  echo -e "vmw_vmci\nvmmon" > "$pkgdir/usr/lib/modules-load.d/vmware.conf"

  for service_file in \
    vmware-hostd-certificates.service \
    vmware-hostd.service \
    vmware-authd.service \
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
    "$pkgdir/usr/lib/vmware/setup"/* \
    "$pkgdir/usr/lib/vmware/lib"/{wrapper-gtk24.sh,libgksu2.so.0/gksu-run-helper} \
    "$pkgdir/usr/lib/vmware-ovftool"/{ovftool,ovftool.bin} \
    "$pkgdir/usr/lib/vmware-installer/$vmware_installer_version"/{vmware-installer,vmis-launcher} \
    "$pkgdir/usr/lib/cups/filter"/* \
    "$pkgdir/usr/lib/vmware-vix/setup"/*

  chmod -R 600 "$pkgdir/etc/vmware/ssl"
  chmod +s \
    "$pkgdir/usr/bin"/{vmware-authd,vmware-mount} \
    "$pkgdir/usr/lib/vmware/bin"/{vmware-vmx,vmware-vmx-debug,vmware-vmx-stats}


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

  for floppy in \
    pvscsi-Windows2003 \
    pvscsi-Windows2008 \
    pvscsi-WindowsXP \
    vmscsi
  do
    ln -s /usr/lib/vmware/floppies/${floppy}.flp "$pkgdir/usr/lib/vmware/resources/${floppy}.flp"
  done

  ln -s /usr/lib/vmware/icu "$pkgdir/etc/vmware/icu"
  ln -s /usr/lib/vmware/bin/vmware-usbarbitrator "$pkgdir/usr/bin/vmware-usbarbitrator"
  ln -s /usr/lib/vmware/bin/vmware-hostd "$pkgdir/usr/lib/vmware/bin/vmware-vim-cmd"
  ln -s /usr/lib/vmware/bin/appLoader "$pkgdir/etc/thnuclnt/.thnumod"
  ln -s /usr/lib/vmware/lib/diskLibWrapper.so/diskLibWrapper.so "$pkgdir/usr/lib/diskLibWrapper.so"
  ln -s /usr/lib/vmware-vix/libvixAllProducts.so "$pkgdir/usr/lib/libvixAllProducts.so"
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
  sed -i 's,@@BINARY@@,/usr/bin/vmplayer,' "$pkgdir/usr/share/applications/vmware-player.desktop"
  sed -i 's,@@BINARY@@,/usr/bin/vmware-netcfg,' "$pkgdir/usr/share/applications/vmware-netcfg.desktop"

  sed -i 's,@@AUTHD_PORT@@,902,' "$pkgdir/usr/lib/vmware/hostd/docroot/client/clients.xml"

  sed \
    -e "s/@@VERSION@@/$vmware_installer_version/" \
    -e "s,@@VMWARE_INSTALLER@@,/usr/lib/vmware-installer/$vmware_installer_version," \
    -i "$pkgdir/etc/vmware-installer/bootstrap"


  # Patch up the VMware kernel sources and configure DKMS.

  dkms_dir="$pkgdir/usr/src/$pkgname-$_pkgver"

  install -Dm 644 "$srcdir/Makefile" "$dkms_dir/Makefile"
  install -Dm 644 "$srcdir/dkms.conf.in" "$dkms_dir/dkms.conf"

  sed \
    -e "s/@PKGNAME@/$pkgname/g" \
    -e "s/@PKGVER@/$_pkgver/g" \
    -i "$dkms_dir/dkms.conf"

  for module in vmmon vmnet; do # vmblock vmci vsock
    tar -xf "vmware-vmx/lib/modules/source/$module.tar" -C "$dkms_dir"
    msg "Patching $module module for DKMS"
    patch -p2 --read-only=ignore --directory="$dkms_dir/$module-only" < "$srcdir/$module.patch"
  done

  rm -r "$pkgdir/usr/lib/vmware/modules/source"

if [ -n "$_enable_macOS_guests" ]; then
  msg "Patching VMware for macOS guest support"
  python2 "$srcdir/unlocker.py" > /dev/null

  for isoimage in ${_fusion_isoimages[@]}
  do
    install -Dm 644 "$srcdir/payload/$isoimage.iso" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso"
    install -Dm 644 "$srcdir/payload/$isoimage.iso.sig" "$pkgdir/usr/lib/vmware/isoimages/$isoimage.iso.sig"
  done
fi

  _create_database_file

  # Define some environment variables for VMware and remove the tests about kernel modules
  install -Dm 644 "$srcdir/vmware-environment.sh" "$pkgdir/etc/conf.d/vmware"
  for program in vmware vmplayer vmware-netcfg vmware-tray; do
    sed -e '/export PRODUCT_NAME/asource /etc/conf.d/vmware' \
        -e 's/if "$BINDIR"\/vmware-modconfig --appname=.*/if true ||/' \
        -i "$pkgdir/usr/bin/$program"
  done

  # use system font rendering
  ln -sf /usr/lib/libfreetype.so.6 "$pkgdir/usr/lib/vmware/lib/libfreetype.so.6/"
  ln -sf /usr/lib/libfontconfig.so.1 "$pkgdir/usr/lib/vmware/lib/libfontconfig.so.1/" # avoid a conflict with fontconfig when VMWARE_USE_SHIPPED_LIBS is defined

  # to solve bugs with incompatibles library versions:
  ln -sf /usr/lib/libz.so.1 "$pkgdir/usr/lib/vmware/lib/libz.so.1/"
}
