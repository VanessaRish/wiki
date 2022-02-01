(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{440:function(e,t,a){"use strict";a.r(t);var r=a(56),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"almalinux-8-5-beta-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-5-beta-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 8.5 Beta Release Notes")]),e._v(" "),a("p",[e._v("These are the release notes for AlmaLinux OS 8.5 Beta for both x86_64 and ARM architectures, codename Arctic Sphynx.")]),e._v(" "),a("h2",{attrs:{id:"beta-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beta-release"}},[e._v("#")]),e._v(" Beta Release")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This is a "),a("strong",[e._v("BETA")]),e._v(" release and should not be used for production installations. The provided upgrade instructions should not be used on production machines, unless you don't mind if something breaks. 😉")])]),e._v(" "),a("h2",{attrs:{id:"providing-feedback-and-getting-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-feedback-and-getting-help"}},[e._v("#")]),e._v(" Providing Feedback and Getting Help")]),e._v(" "),a("p",[e._v("Please report any issues you may encounter during tests on the "),a("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),a("OutboundLink")],1),e._v(". Additionally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out "),a("a",{attrs:{href:"https://chat.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community Chat"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://almalinux.discourse.group/c/85-beta/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Forums"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://reddit.com/r/almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community on Reddit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Added new module streams:")]),e._v(" "),a("ul",[a("li",[e._v("nginx 1.20")]),e._v(" "),a("li",[e._v("Node.js 16")]),e._v(" "),a("li",[e._v("Ruby 3.0")])])]),e._v(" "),a("li",[a("p",[e._v("Updated components:")]),e._v(" "),a("ul",[a("li",[e._v("PHP 7.4.19")]),e._v(" "),a("li",[e._v("Squid 4.15")]),e._v(" "),a("li",[e._v("Mutt 2.0.7")])])]),e._v(" "),a("li",[a("p",[e._v("Compiler Updates:")]),e._v(" "),a("ul",[a("li",[e._v("GCC Toolset 11")]),e._v(" "),a("li",[e._v("LLVM Toolset 12.0.1")]),e._v(" "),a("li",[e._v("Rust Toolset 1.54.0")]),e._v(" "),a("li",[e._v("Go Toolset 1.16.7")])])]),e._v(" "),a("li",[a("p",[e._v("The closest mirror will be selected automatically in network install mode")])]),e._v(" "),a("li",[a("p",[e._v("SCAP Security Guide has new profiles and improvements for the existing profiles:")]),e._v(" "),a("ul",[a("li",[e._v("A new profile aligned with the Australian Cyber Security Centre Information Security Manual (ACSC ISM).")]),e._v(" "),a("li",[e._v("The Center for Internet Security (CIS) profile restructured into four different profiles (Workstation Level 1, Workstation Level 2, Server Level 1, Server Level 2).")]),e._v(" "),a("li",[e._v("The Security Technical Implementation Guide (STIG) security profile updated to version V1R3.")]),e._v(" "),a("li",[e._v("A new STIG profile compatible with Server with GUI installations.")]),e._v(" "),a("li",[e._v("A new French National Security Agency (ANSSI) High Level profile, which completes the availability of profiles for all ANSSI-BP-028 v1.2 hardening levels in the SCAP Security Guide.")])])])]),e._v(" "),a("h2",{attrs:{id:"installation-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),a("p",[e._v("There are three installation ISO images available:")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.5-beta-1-x86_64-boot.iso")]),e._v(" - a single network installation CD image that downloads packages over the Internet.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.5-beta-1-x86_64-minimal.iso")]),e._v(" - a minimal self-containing DVD image that makes possible offline installation.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.5-beta-1-x86_64-dvd.iso")]),e._v(" - a full installation DVD image that contains mostly all AlmaLinux packages.")]),e._v(" "),a("p",[e._v("The recommended way to download ISO images is using the "),a("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8.5-beta/isos/x86_64/AlmaLinux-8.5-beta.torrent",target:"_blank",rel:"noopener noreferrer"}},[e._v("torrent"),a("OutboundLink")],1),e._v(" links. Alternatively, you can select a mirror closest to your geographic area listed on the "),a("a",{attrs:{href:"https://mirrors.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),a("OutboundLink")],1),e._v(" website. A local mirror will be a lot quicker than using "),a("code",[e._v("repo.almalinux.org")]),e._v(" directly. Then, download a suitable ISO image from the 8.5-beta/isos/$arch/ directory of your source, for example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://mirror.interserver.net/almalinux/8.5-beta/isos/x86_64/AlmaLinux-8.5-beta-1-x86_64-boot.iso\n")])])]),a("p",[e._v("Download and import the AlmaLinux public key:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg --import RPM-GPG-KEY-AlmaLinux\n")])])]),a("p",[e._v("Download and verify a checksums list:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.5-beta/isos/x86_64/CHECKSUM\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# we are looking for “Good signature”")]),e._v("\n$ gpg --verify CHECKSUM\ngpg: Signature made Wed "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" 02:07:37 PM UTC using RSA key ID C21AD6EA\ngpg: Good signature from "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux <packager@almalinux.org>"')]),e._v("\ngpg: WARNING: This key is not certified with a trusted signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n     Subkey fingerprint: E53C F5EF 91CE B0AD "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1812")]),e._v("  ECB8 51D6 647E C21A D6EA\n")])])]),a("p",[e._v("Verify the downloaded ISO image checksum:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-8.5-beta-1-x86_64-boot.iso\n0be5eb574b872737a930ae77d4163b89709cbd537be0f541dbfef046b1813feb  AlmaLinux-8.5-beta-1-x86_64-boot.iso\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-8.5-beta-1-x86_64-boot.iso'")]),e._v("\nSHA256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-8.5-beta-1-x86_64-boot.iso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 0be5eb574b872737a930ae77d4163b89709cbd537be0f541dbfef046b1813feb\n")])])]),a("p",[e._v("If you decide to use the "),a("code",[e._v("AlmaLinux-8.5-beta-1-x86_64-boot.iso")]),e._v(" image, you will need to provide the "),a("code",[e._v("8.5-beta/BaseOS/x86_64/kickstart/")]),e._v(" repository from the selected mirror as the Installation Source if the installer will not be able to find closest mirror for some reason.")]),e._v(" "),a("p",[e._v("There are no extra Installation Sources required if you decided to go with either the minimal or DVD ISO images.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions"}},[e._v("#")]),e._v(" Upgrade Instructions")]),e._v(" "),a("p",[a("strong",[e._v("Please do not use these update instructions on production machines, unless you don't mind if something breaks.")]),e._v(" 😉")]),e._v(" "),a("p",[e._v("Upgrade the almalinux-release package to the 8.5-1.el8 version from the beta repositories:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y https://repo.almalinux.org/almalinux/almalinux-release-latest-8-beta.x86_64.rpm\n$ dnf clean all\n")])])]),a("p",[e._v("the new package contains updated repository URLs so that you can just run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ dnf upgrade -y\n")])])]),a("p",[e._v("to update the rest of the packages.")]),e._v(" "),a("h2",{attrs:{id:"added-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-packages"}},[e._v("#")]),e._v(" Added packages")]),e._v(" "),a("p",[e._v("Here is a list of added packages in comparison with upstream distribution.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Package")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("almalinux-backgrounds")]),e._v(" "),a("td",[e._v("AlmaLinux background images."),a("br"),e._v("Replaces "),a("code",[e._v("redhat-backgrounds")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-indexhtml")]),e._v(" "),a("td",[e._v("AlmaLinux default browser page"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-indexhtml")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for OS"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos-httpd")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for HTTPD server"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos-httpd")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos-ipa")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for IPA server"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos-ipa")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-release")]),e._v(" "),a("td",[e._v("AlmaLinux release package, repos, and EULA"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-release")]),e._v(" and "),a("code",[e._v("redhat-release-eula")])])])])]),e._v(" "),a("h2",{attrs:{id:"removed-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed-packages"}},[e._v("#")]),e._v(" Removed packages")]),e._v(" "),a("p",[e._v("Here is a list of removed packages in comparison with the upstream distribution."),a("br"),e._v("\nAlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join "),a("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/engineeringpackaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat"),a("OutboundLink")],1),e._v(" as well as filing a bug report at "),a("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),a("OutboundLink")],1),e._v(" to discuss if you think any of the packages below should be included into the repos.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Package")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("insights-client")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("kmod-redhat-*")]),e._v(" "),a("td",[e._v("RHEL specific modules from Driver Update Program")])]),e._v(" "),a("tr",[a("td",[e._v("kpatch*")]),e._v(" "),a("td",[e._v("RHEL specific live patches for kernel")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-backgrounds")]),e._v(" "),a("td",[e._v("RHEL specific background images")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-indexhtml")]),e._v(" "),a("td",[e._v("RHEL specific default browser page")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos")]),e._v(" "),a("td",[e._v("RHEL specific graphics for OS")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos-httpd")]),e._v(" "),a("td",[e._v("RHEL specific graphics for HTTPD server")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos-ipa")]),e._v(" "),a("td",[e._v("RHEL specific graphics for IPA server")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-release")]),e._v(" "),a("td",[e._v("RHEL specific release package and repos")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-release-eula")]),e._v(" "),a("td",[e._v("RHEL specific EULA")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-support-lib-python")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-support-tool")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhc")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhc-worker-playbook")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhsm-gtk")]),e._v(" "),a("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("rhsm-icons")]),e._v(" "),a("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("spice-client-win-x64")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-client-win-x86")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-qxl-wddm-dod")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-vdagent-win-x64")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-vdagent-win-x86")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-cockpit")]),e._v(" "),a("td",[e._v("RHEL specific Cockpit module for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-initial-setup-addon")]),e._v(" "),a("td",[e._v("RHEL specific initial setup addon for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-plugin-container")]),e._v(" "),a("td",[e._v("RHEL specific Subscription Manager plugin for upstream vendor containers")])]),e._v(" "),a("tr",[a("td",[e._v("virt-who")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("virtio-win")]),e._v(" "),a("td",[e._v("Contain binaries built by upstream vendor")])])])]),e._v(" "),a("p",[e._v("Red Hat and RHEL are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);t.default=s.exports}}]);